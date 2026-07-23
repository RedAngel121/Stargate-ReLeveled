// priority: 0

// ===============================
// CONVERSION CATALYST
// ===============================

const CONVERSIONS = {
    'createaddition:copper_wire': 'sgcommunity_pack:mosfet',
    'ae2:silicon': 'sgcommunity_pack:integrated_circuit',
}

BlockEvents.rightClicked(event => {
    if (event.block.id !== 'sgcommunity_pack:conversion_catalyst')
        return

    const player = event.player
    const heldItem = player.mainHandItem

    const result = CONVERSIONS[heldItem.id]

    if (!result)
        return

    heldItem.count--
    player.give(result)
})

// ===============================
// OREDICTIONIFICATOR AUTO TAGS
// ===============================

const OREDICTIONIFICATOR_FILTER_MERGE = '{filters:[{filter:"convert:mosfet",type:"oredictionificator_item_filter",selected:"sgcommunity_pack:mosfet"},{filter:"convert:ic",type:"oredictionificator_item_filter",selected:"sgcommunity_pack:integrated_circuit"},{filter:"convert:isotopic_oscillator",type:"oredictionificator_item_filter",selected:"sgcommunity_pack:isotopic_decay_oscillator"},{filter:"convert:computation_core",type:"oredictionificator_item_filter",selected:"sgcommunity_pack:computation_core"}]}'

BlockEvents.placed('mekanism:oredictionificator', event => {
    const { block, server } = event

    server.scheduleInTicks(1, () => {
        server.runCommandSilent(
            `data merge block ${block.x} ${block.y} ${block.z} ${OREDICTIONIFICATOR_FILTER_MERGE}`
        )
    })
})

// ===============================
// Easy Mode Team Init
// ===============================

ServerEvents.loaded(event => {
    event.server.runCommandSilent("function sgcommunity_pack:ez")
})

// ===============================
// Surface Command /top
// ===============================

ServerEvents.commandRegistry(event => {
    const Commands = event.commands
    event.register(
        Commands.literal("top")
            .requires(s => s.isPlayer())
            .executes(c => {
                let player = c.getSource().player
                let level = player.level
                let dimension = level.dimension.toString()
                // blacklist Nether + End
                if (
                    dimension === "minecraft:the_nether" ||
                    dimension === "minecraft:the_end"
                ) {
                    return 0
                }
                let x = Math.floor(player.x)
                let z = Math.floor(player.z)
                for (let y = 319; y >= -64; y--) {
                    let block = level.getBlock(x, y, z)
                    if (block && block.id && !block.id.includes("air")) {
                        player.teleportTo(x + 0.5, y + 1, z + 0.5)
                        return 1
                    }
                }
                return 0
            })
    )
})