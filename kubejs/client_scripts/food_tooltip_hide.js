//Block AppleSkin from displaying artificial nutritional values for listed items.
const hiddenNutritionItems = [
    'minecraft:melon'
]

const AppleSkinTooltip = Java.loadClass(
    'squeek.appleskin.api.event.TooltipOverlayEvent$Pre'
)

NativeEvents.onEvent(AppleSkinTooltip, event => {
    if (hiddenNutritionItems.includes(String(event.itemStack.id))) {
        event.setCanceled(true)
    }
})
