
const $BRUSHABLE_BLOCK = Java.loadClass('net.minecraft.world.level.block.BrushableBlock');

global["JadeBrushableBlocksClientCallback"] = (tooltip, accessor, pluginConfig) => {
    const { serverData } = accessor;
    if (!serverData) return;
    if (!serverData.contains("brushing_result")) return;
    const displayNameTag = serverData.get("brushing_result");
    const displayName = Text.of(displayNameTag);
    if (!displayName) return;
    tooltip.add(Text.of(["Item: ", Text.of(displayName)]));
};

JadeEvents.onClientRegistration((event) => {
    event.block('kubejsadditions:brushable_block', $BRUSHABLE_BLOCK)
        .tooltip((tooltip, accessor, pluginConfig) => {
            global["JadeBrushableBlocksClientCallback"](tooltip, accessor, pluginConfig);
        });
});