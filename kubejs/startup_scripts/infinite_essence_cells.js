let essences = [
    "air", "water", "fire", "earth", "stone", "dirt",
    "wood", "ice", "deepslate", "nature", "dye", "nether",
    "coal", "coral", "honey", "amethyst", "pig", "chicken",
    "cow", "sheep", "squid", "fish", "slime", "turtle",
    "armadillo", "silicon", "sulfur", "limestone", "iron", "copper",
    "nether_quartz", "glowstone", "redstone", "obsidian", "prismarine", "sculk",
    "zombie", "skeleton", "creeper", "spider", "phantom", "rabbit",
    "tin", "bronze", "zinc", "brass", "lead", "sky_stone",
    "certus_quartz", "gold", "lapis_lazuli", "end", "experience", "breeze",
    "blaze", "ghast", "enderman", "steel", "electrum", "uranium",
    "soulium", "osmium", "fluorite", "refined_glowstone", "refined_obsidian", "fluix",
    "diamond", "emerald", "netherite", "wither_skeleton", "platinum", "nether_star",
    "dragon_egg", "desh", "borax", "corronium", "naquadah", "tharsite"
]

StartupEvents.registry("item", evnt => {
    for (let ID of essences) {
        evnt.create("sgcommunity_pack:" + ID + "_essence_cell", "custom_infinity_cell")
            .itemType("mysticalagriculture:" + ID + "_essence")
            .texture("sgcommunity_pack:item/inf_cells/" + ID + "_essence_cell")
            .cellModel("sgcommunity_pack:block/drive/" + ID + "_essence_cell");
    }
})