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

// ===============================
// DISABLE HOPPERS
// ===============================

BlockEvents.placed("minecraft:hopper", event => {
    event.player.sendSystemMessage(Text.of("Hoppers disabled. Use pipez."));
    event.cancel();
});
