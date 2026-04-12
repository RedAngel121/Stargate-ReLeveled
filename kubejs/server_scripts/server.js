// priority: 0

// ===============================
// REMOVE TRADES
// ===============================
MoreJS.wandererTrades(event => {
    event.removeTrades({
        outputItem: "minecraft:beacon"
    });
});
MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades(["advancedperipherals:computer_scientist"]);
    event.removeModdedTypedTrades(["advancedperipherals:computer_scientist"]);
});

// ===============================
// REMOVE MYST AG SOILS
// ===============================

RecipeViewerEvents.removeEntries("item", event => {
    event.remove("mysticalagriculture:inferium_farmland")
    event.remove("mysticalagriculture:prudentium_farmland")
    event.remove("mysticalagriculture:tertium_farmland")
    event.remove("mysticalagriculture:imperium_farmland")
    event.remove("mysticalagriculture:supremium_farmland")
    event.remove("mysticalagradditions:insanium_farmland")
})
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
})

// ===============================
// EASY MODE COMMANDS
// ===============================

function easyModeOn(source) {
    let player = source.player;
    player.stages.add("easymode");
    source.sendSuccess(Text.of("Easy mode enabled"), true);
}

function easyModeOff(source) {
    let player = source.player;
    player.stages.remove("easymode");
    player.data.ftbquests.reset("5C938F25D0F5D112");
    source.sendSuccess(Text.of("Easy mode disabled"), true);
}

function toggleEasyMode(source) {
    let player = source.player;
    if (player.stages.has("easymode")) easyModeOff(source);
    else easyModeOn(source);
    return 1;
}

function giveConverter(source) {
    let player = source.player;
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
            .then(Commands.literal("toggle").executes(c => toggleEasyMode(c.getSource())))
            .then(Commands.literal("getconverter").executes(c => giveConverter(c.getSource())))
    );
});