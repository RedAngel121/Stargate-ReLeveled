
const $BRUSHABLE_BLOCK_ENTITY = Java.loadClass('net.minecraft.world.level.block.entity.BrushableBlockEntity');

global["JadeBrushableBlocksCallback"] = (tag, accessor) => {
    const blockEntity = accessor.getBlockEntity();
    if (!blockEntity) return;
    if (!blockEntity.getItem()) return;
    if (blockEntity.getItem().isEmpty()) return;
    tag.putString("brushing_result", Item.of(blockEntity.getItem()).getDisplayName().toJson());
};

JadeEvents.onCommonRegistration((event) => {
    event.blockDataProvider('kubejsadditions:brushable_block', $BRUSHABLE_BLOCK_ENTITY)
        .setCallback((tag, accessor) => {
            global["JadeBrushableBlocksCallback"](tag, accessor);
        });
});