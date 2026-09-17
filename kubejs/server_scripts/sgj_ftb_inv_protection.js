// sgjourney_ftb_inventory_protection.js
//
// Keeps SGJourney controls usable in FTB claims while restricting
// inventory access according to the owning team's Block Interact Mode.
//
// Minecraft 1.21.1 / NeoForge

const $FTBChunksAPI = Java.loadClass(
    'dev.ftb.mods.ftbchunks.api.FTBChunksAPI'
)

// Native FTB action-bar notification, including its shared cooldown.
const $SGJourneyFTBPlayerNotifier = Java.loadClass(
    'dev.ftb.mods.ftbchunks.PlayerNotifier'
)

const $FTBChunksProperties = Java.loadClass(
    'dev.ftb.mods.ftbchunks.api.FTBChunksProperties'
)

const $ChunkDimPos = Java.loadClass(
    'dev.ftb.mods.ftblibrary.math.ChunkDimPos'
)

const $UUID = Java.loadClass(
    'java.util.UUID'
)

const $Component = Java.loadClass(
    'net.minecraft.network.chat.Component'
)

const $MenuProvider = Java.loadClass(
    'net.minecraft.world.MenuProvider'
)

const $RingPanelProtected = Java.loadClass(
    'net.povstalec.sgjourney.common.menu.RingPanelMenu$Protected'
)

const $NetworkUtils = Java.loadClass(
    'net.povstalec.sgjourney.common.misc.NetworkUtils'
)

const DHD_BLOCKS = new Set([
    'sgjourney:universe_dhd',
    'sgjourney:milky_way_dhd',
    'sgjourney:pegasus_dhd',
    'sgjourney:classic_dhd',
    'moregate:cameleon_dhd'
])
// In case that more ring panels are added in the future
// This can be converted to a set like with the DHDs above
// But what is currently "var isRingPanel = blockId == RING_PANEL" later in the code
// Will need to be changed to "var isRingPanel = RING_PANEL.has(blockId)"
const RING_PANEL = 'sgjourney:goauld_ring_panel'


function canAccessSGJourneyInventory(player, block) {
    var manager
    var uuid
    var chunkPos
    var claimedChunk
    var teamData

    try {
        if (!$FTBChunksAPI.api().isManagerLoaded()) {
            return true
        }

        manager = $FTBChunksAPI.api().getManager()
        uuid = $UUID.fromString(player.getStringUuid())

        if (manager.getBypassProtection(uuid)) {
            return true
        }

        chunkPos = new $ChunkDimPos(
            player.level,
            block.getPos()
        )

        claimedChunk = manager.getChunk(chunkPos)

        if (claimedChunk == null) {
            return true
        }

        teamData = claimedChunk.getTeamData()

        return teamData.canPlayerUse(
            player,
            $FTBChunksProperties.BLOCK_INTERACT_MODE
        )
    } catch (e) {
        // Fail open if another mod/API changes unexpectedly.
        return true
    }
}


BlockEvents.rightClicked(event => {
    var player = event.player
    var block = event.block
    var blockId = String(block.id)
    var isDHD = DHD_BLOCKS.has(blockId)
    var isRingPanel = blockId == RING_PANEL
    var facingName
    var access
    var tryingToOpenInventory
    var pos

    if (!isDHD && !isRingPanel) {
        return
    }

    facingName = event.facing == null
        ? 'null'
        : String(event.facing.getName())

    access = canAccessSGJourneyInventory(player, block)

    if (isDHD) {
        // SGJourney opens the normal dialing UI only for:
        // top face + not sneaking.
        //
        // Every other interaction is the crystal/inventory path.
        tryingToOpenInventory =
            facingName != 'up' || player.isShiftKeyDown()

        if (!tryingToOpenInventory || access) {
            return
        }

        // Use the same notifier, translation, color, and 2000 ms cooldown
        // as FTB Chunks' own claim protection. This displays above the
        // hotbar instead of adding a message to the player's chat.
        player.server.scheduleInTicks(1, function() {
            $SGJourneyFTBPlayerNotifier.notifyWithCooldown(
                player,
                $Component.translatable('ftbchunks.action_prevented')
                    .withColor(0xFFAA00),
                2000
            )
        })

        event.cancel()
        return
    }

    if (isRingPanel) {
        if (access) {
            return
        }

        // Do not cancel the interaction. Let SGJourney open its normal
        // menu first, then replace it one tick later with its existing
        // protected controls-only menu.
        pos = block.getPos()

        player.server.scheduleInTicks(1, function() {
            var delayedLevel = player.level
            var delayedRingPanel = delayedLevel.getBlockEntity(pos)
            var delayedProvider

            if (delayedRingPanel == null) {
                return
            }

            delayedRingPanel.tryUpdate()

            delayedProvider = new JavaAdapter($MenuProvider, {
                getDisplayName: function() {
                    return $Component.translatable(
                        'screen.sgjourney.ring_panel'
                    )
                },

                createMenu: function(windowId, playerInventory, menuPlayer) {
                    return new $RingPanelProtected(
                        windowId,
                        playerInventory,
                        delayedRingPanel
                    )
                }
            })

            $NetworkUtils.openMenu(
                player,
                delayedProvider,
                pos
            )
        })
    }
})
