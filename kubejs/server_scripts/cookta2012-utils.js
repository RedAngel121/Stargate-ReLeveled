// priority 2
ServerEvents.recipes(event => {
    event.shaped("sgcommunity_pack:region_inspection_stick", ["d", "s"], {
        "d": "minecraft:red_dye",
        "s": "minecraft:stick"
    });
    event.shaped("sgcommunity_pack:region_claiming_stick", ["d", "s"], {
        "d": "minecraft:yellow_dye",
        "s": "minecraft:stick"
    });
});