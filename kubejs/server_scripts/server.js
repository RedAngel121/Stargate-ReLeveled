// priority: 0

// ===============================
// REMOVE TRADES
// ===============================

MoreJS.wandererTrades(event => { event.removeTrades({ outputItem: "minecraft:beacon" }); });
MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades(["advancedperipherals:computer_scientist"]);
    event.removeModdedTypedTrades(["advancedperipherals:computer_scientist"]);
});

// ===============================
// REMOVE GAME BREAKERS
// ===============================

let disappear = [
    "mysticalagradditions:nether_star_crux",
    "mysticalagradditions:dragon_egg_crux",
    "mekanism:portable_teleporter",
    "mekanism:teleporter",
    "mekanism:teleporter_frame",
    "pipez:energy_pipe",
    "rftoolsutility:charged_porter",
    "rftoolsutility:advanced_charged_porter",
    "rftoolsutility:destination_analyzer",
    "rftoolsutility:matter_booster",
    "rftoolsutility:simple_dialer",
    "tinyredstone:silicon",
    "rsgauges:transport_terminal",
    "rsgauges:transport_chip",
    "mekmm:fluid_replicator",
    "mekmm:chemical_replicator",
    "mekmm:author_doll",
    "mekmm:modeler_doll",
]
ServerEvents.recipes(event => {
    for (let each of disappear) {
        event.remove(each)
    }
})
RecipeViewerEvents.removeEntries("item", event => {
    for (let each of disappear) {
        event.remove(each)
    }
})

// ===============================
// REMOVE RECIPES ONLY
// ===============================

let kill_recipe = [
    "mekmm:replicator",
    "mekmm:compressing/author_doll",
    "mekmm:compressing/modeler_doll"
]
ServerEvents.recipes(event => {
    for (let each of kill_recipe) {
        event.remove(each)
    }
})
