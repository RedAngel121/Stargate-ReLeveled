//Giving Item a nutritional value for the Nutritional Liquifier
//Nutritional Paste output (mB) = food nutrition x 50; nutrition 20 = 1000 mB.

ItemEvents.modification(event => {
    event.modify('minecraft:melon', item => {
        item.food = food => {
            food.nutrition = 20
            food.saturation = 0
        }
    })
})


//Probably overcomplicated method to block the items that were added nutritional value to be eaten.
//Block eating items that have been given artificial nutritional values.
//Add item IDs to this list as needed; keep their individual food values above.
const nonEdibleItems = [
    'minecraft:melon'
]

const $RightClickItem = Java.loadClass(
    'net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickItem'
)

const $InteractionResult = Java.loadClass(
    'net.minecraft.world.InteractionResult'
)

const $BuiltInRegistries = Java.loadClass(
    'net.minecraft.core.registries.BuiltInRegistries'
)

NativeEvents.onEvent($RightClickItem, event => {
    const stack = event.getItemStack()
    const itemId = String(
        $BuiltInRegistries.ITEM.getKey(stack.getItem())
    )

    if (!nonEdibleItems.includes(itemId)) return

    event.setCancellationResult($InteractionResult.FAIL)
    event.setCanceled(true)
})
