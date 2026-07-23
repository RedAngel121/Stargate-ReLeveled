// priority: 1
// Essence Item Cells
console.info("Loading Infinite Cells")

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
    "diamond", "emerald", "netherite", "wither_skeleton",  "nether_star", "dragon_egg", 
    "desh", "ostrum", "calorite", "borax", "naquadah", "platinum", "nickel", "entro"
]

StartupEvents.registry("item", evnt => {
    for (let ID of essences) {
        evnt.create("sgcommunity_pack:" + ID + "_essence_cell", "custom_infinity_cell")
            .itemType("mysticalagriculture:" + ID + "_essence")
            .texture("sgcommunity_pack:item/inf_cells/" + ID + "_essence_cell")
            .cellModel("sgcommunity_pack:block/drive/" + ID + "_essence_cell");
    }
})

// ====================================================================================================
// Item Cells
// NONE

// ====================================================================================================
// Fluid Cells
// Add XP cell too

StartupEvents.registry("item", evnt => {
    evnt.create("sgcommunity_pack:lava_cell", "custom_infinity_cell")
        .fluidType("minecraft:lava")
        .texture("sgcommunity_pack:item/inf_cells/lava_cell")
        .cellModel("sgcommunity_pack:block/drive/lava_cell");
})

StartupEvents.registry("item", evnt => {
    evnt.create("sgcommunity_pack:milk_cell", "custom_infinity_cell")
        .fluidType("minecraft:milk")
        .texture("sgcommunity_pack:item/inf_cells/milk_cell")
        .cellModel("sgcommunity_pack:block/drive/milk_cell");
})

StartupEvents.registry("item", evnt => {
    evnt.create("sgcommunity_pack:honey_cell", "custom_infinity_cell")
        .fluidType("create:honey")
        .texture("sgcommunity_pack:item/inf_cells/honey_cell")
        .cellModel("sgcommunity_pack:block/drive/honey_cell");
})

StartupEvents.registry("item", evnt => {
    evnt.create("sgcommunity_pack:chocolate_cell", "custom_infinity_cell")
        .fluidType("create:chocolate")
        .texture("sgcommunity_pack:item/inf_cells/chocolate_cell")
        .cellModel("sgcommunity_pack:block/drive/chocolate_cell");
})

StartupEvents.registry("item", evnt => {
    evnt.create("sgcommunity_pack:ruby_chocolate_cell", "custom_infinity_cell")
        .fluidType("create_confectionery:ruby_chocolate")
        .texture("sgcommunity_pack:item/inf_cells/ruby_chocolate_cell")
        .cellModel("sgcommunity_pack:block/drive/ruby_chocolate_cell");
})

StartupEvents.registry("item", evnt => {
    evnt.create("sgcommunity_pack:black_chocolate_cell", "custom_infinity_cell")
        .fluidType("create_confectionery:black_chocolate")
        .texture("sgcommunity_pack:item/inf_cells/black_chocolate_cell")
        .cellModel("sgcommunity_pack:block/drive/black_chocolate_cell");
})

StartupEvents.registry("item", evnt => {
    evnt.create("sgcommunity_pack:white_chocolate_cell", "custom_infinity_cell")
        .fluidType("create_confectionery:white_chocolate")
        .texture("sgcommunity_pack:item/inf_cells/white_chocolate_cell")
        .cellModel("sgcommunity_pack:block/drive/white_chocolate_cell");
})

StartupEvents.registry("item", evnt => {
    evnt.create("sgcommunity_pack:oil_cell", "custom_infinity_cell")
        .fluidType("oritech:still_oil")
        .texture("sgcommunity_pack:item/inf_cells/oil_cell")
        .cellModel("sgcommunity_pack:block/drive/oil_cell");
})

StartupEvents.registry("item", evnt => {
    evnt.create("sgcommunity_pack:dt_fuel_cell", "custom_infinity_cell")
        .fluidType("mekanismgenerators:fusion_fuel")
        .texture("sgcommunity_pack:item/inf_cells/dt_fuel_cell")
        .cellModel("sgcommunity_pack:block/drive/dt_fuel_cell");
})

// ====================================================================================================
// Chem Cells, CRASHING WITH ERROR: Java class "mekanism.common.registries.MekanismChemicals" has no public instance field or method named "FUSION_FUEL".
// This is because Mek Gen is the mod it comes from, not basic mekanism... might have to deal with standard liquid fuel then...

// const MekKey$ = Java.loadClass("me.ramidzkh.mekae2.ae2.MekanismKey")
// const Chem$ = Java.loadClass("mekanism.common.registries.MekanismChemicals")
// 
// StartupEvents.registry('item', evnt => {
//     evnt.create("sgcommunity_pack:dt_fuel_cell", "custom_infinity_cell")
//         .type(() => MekKey$.of(Chem$.FUSION_FUEL.getStack(1000)))
//         .texture("sgcommunity_pack:item/inf_cells/dt_fuel_cell")
//         .cellModel("sgcommunity_pack:block/drive/dt_fuel_cell");
// })