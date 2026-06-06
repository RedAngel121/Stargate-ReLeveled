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
// REMOVE MYST AG SOILS
// ===============================

ServerEvents.recipes(event => {
    event.remove("mysticalagriculture:inferium_farmland")
    event.remove("mysticalagriculture:inferium_farmland_till")
    event.remove("mysticalagriculture:prudentium_farmland")
    event.remove("mysticalagriculture:prudentium_farmland_till")
    event.remove("mysticalagriculture:tertium_farmland")
    event.remove("mysticalagriculture:tertium_farmland_till")
    event.remove("mysticalagriculture:imperium_farmland")
    event.remove("mysticalagriculture:imperium_farmland_till")
    event.remove("mysticalagriculture:supremium_farmland")
    event.remove("mysticalagriculture:supremium_farmland_till")
    event.remove("mysticalagradditions:insanium_farmland")
    event.remove("mysticalagradditions:insanium_farmland_till")
    event.remove("mysticalagriculture:essence/common/silicon")
})

RecipeViewerEvents.removeEntries("item", event => {
    event.remove("mysticalagriculture:inferium_farmland")
    event.remove("mysticalagriculture:prudentium_farmland")
    event.remove("mysticalagriculture:tertium_farmland")
    event.remove("mysticalagriculture:imperium_farmland")
    event.remove("mysticalagriculture:supremium_farmland")
    event.remove("mysticalagradditions:insanium_farmland")
})

// ===============================
// REMOVE GAME BREAKERS
// ===============================
let poof = [
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
    "rsgauges:transport_chip"
]
ServerEvents.recipes(event => {
    for (let each of poof) {
        event.remove(each)
    }
})
RecipeViewerEvents.removeEntries("item", event => {
    for (let each of poof) {
        event.remove(each)
    }
})

// ===============================
// EASY MODE COMMANDS -- REPLACE THIS WITH IN GAME QUESTS IF POSSIBLE
// ===============================

function easyModeOn(source) {
    let player = source.player;
    player.stages.add("easymode");
    source.sendSuccess(Text.of("Easy mode enabled"), true);
}

function easyModeOff(source) {
    let player = source.player;
    player.stages.remove("easymode");
    source.sendSuccess(Text.of("Easy mode disabled"), true);
}

function toggleEasyMode(source) {
    let player = source.player;
    if (player.stages.has("easymode")) {
        easyModeOff(source);
    } else {
        easyModeOn(source);
    }
    return 1;
}

function giveConverter(source) {
    let player = source.player;
    if (!player.stages.has("easymode")) {
        source.sendFailure(Text.of("Easy mode is not enabled"));
        return 0;
    }
    player.give("mekanism:oredictionificator");
    source.sendSuccess(Text.of("Gave Oredictionificator"), true);
    return 1;
}

ServerEvents.commandRegistry(event => {
    const Commands = event.commands;

    event.register(
        Commands.literal("easymode")
            .requires(s => s.isPlayer())
            .executes(c => toggleEasyMode(c.getSource()))
            .then(Commands.literal("toggle")
                .executes(c => toggleEasyMode(c.getSource()))
            )
            .then(Commands.literal("getconverter")
                .requires(s => {
                    return s.isPlayer() && s.player.stages.has("easymode");
                })
                .executes(c => giveConverter(c.getSource()))
            )
    );
});