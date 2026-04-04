// priority: 1

// ===============================
// VILLAGER TRADE REMOVAL
// ===============================

MoreJS.villagerTrades(event => {
    event.forEachTrades("advancedperipherals:computer_scientist", [1, 5], listings => {
        listings.removeIf(() => true);
    });
});

const VillagerTrade = Java.loadClass("de.srendi.advancedperipherals.common.village.VillagerTrade");

MoreJS.wandererTrades(event => {
    event.getTrades(1).removeIf(trade => trade.getClass() == VillagerTrade);
    event.getTrades(2).removeIf(trade => trade.getClass() == VillagerTrade);

    event.removeTrades({
        firstItem: Ingredient.all,
        secondItem: Ingredient.all,
        outputItem: Ingredient.of("minecraft:beacon")
    });
});


// ===============================
// COMPOST ITEM LISTS
// ===============================

const floralCompostItems = [
    "minecraft:wither_rose","minecraft:orange_tulip","minecraft:rose_bush",
    "biomesoplenty:wilted_lily","minecraft:cornflower","biomesoplenty:jacaranda_leaves",
    "minecraft:flowering_azalea_leaves","biomesoplenty:pink_hibiscus","biomesoplenty:rose",
    "biomesoplenty:flowering_oak_leaves","biomesoplenty:goldenrod","minecraft:blue_orchid",
    "minecraft:white_tulip","minecraft:cherry_leaves","minecraft:lily_of_the_valley",
    "biomesoplenty:icy_iris","biomesoplenty:snowblossom_leaves","minecraft:pitcher_plant",
    "minecraft:allium","biomesoplenty:blue_hydrangea","biomesoplenty:orange_cosmos",
    "biomesoplenty:burning_blossom","biomesoplenty:tall_lavender","minecraft:flowering_azalea",
    "minecraft:pink_petals","minecraft:azure_bluet","minecraft:poppy","minecraft:torchflower",
    "biomesoplenty:pink_daffodil","biomesoplenty:lavender","minecraft:mangrove_propagule",
    "minecraft:red_tulip","biomesoplenty:violet","biomesoplenty:glowflower",
    "minecraft:peony","minecraft:sunflower","biomesoplenty:white_petals",
    "biomesoplenty:wildflower","minecraft:dandelion","minecraft:pink_tulip",
    "minecraft:oxeye_daisy","minecraft:lilac"
];

const mulchItems = Ingredient.of("#minecraft:saplings").getItemIds();
const coralCompostItems = Ingredient.of("#minecraft:flowers").getItemIds();
const organicCompostItems = Ingredient.of("#c:crops").getItemIds();


// ===============================
// RECIPES / BOTANY POTS - WILL MYST AG MAKE THIS USELESS?
// ===============================

ServerEvents.recipes(event => {

    // Add mulch category to botanytrees
    event.forEachRecipe({ mod: "botanytrees", type: "botanypots:crop" }, recipe => {
        recipe.json.add("categories", ["dirt", "mulch"]);
    });

    function notCategories(json, categories) {
        let out = true;
        json.getAsJsonArray("categories").forEach(cat => {
            if (categories.includes(cat.getAsString())) out = false;
        });
        return out;
    }

    // Assign categories dynamically
    event.forEachRecipe({ mod: "botanypots", type: "botanypots:crop" }, recipe => {

        let seed = recipe.json.get("seed");

        function handleItem(id) {
            if (floralCompostItems.includes(id)) {
                recipe.json.getAsJsonArray("categories")["add(java.lang.String)"]("floral");
            } else if (notCategories(recipe.json, ["water","end","nether","log","wood","jungle_wood"])) {
                recipe.json.getAsJsonArray("categories")["add(java.lang.String)"]("organic");
            }
        }

        if (seed.isJsonObject()) {
            handleItem(seed.getAsJsonObject().get("item").getAsString());
        }

        if (seed.isJsonArray()) {
            seed.getAsJsonArray().forEach(e => {
                if (e.isJsonObject()) {
                    handleItem(e.getAsJsonObject().get("item").getAsString());
                }
            });
        }
    });

// ===============================
// BOTANY POT SOILS - WILL MYST AG MAKE THIS USELESS?
// ===============================

    event.custom({
        type: "botanypots:soil",
        input: { item: "sgcommunity_pack:mulch_compost" },
        display: { block: "sgcommunity_pack:mulch_compost" },
        categories: ["log","wood","jungle_wood","mushroom","mulch"],
        growthModifier: 4
    });

    event.custom({
        type: "botanypots:soil",
        input: { item: "sgcommunity_pack:coral_compost" },
        display: { block: "sgcommunity_pack:coral_compost" },
        categories: ["water"],
        growthModifier: 4
    });

    // Throwing Error while parsing recipe: Input does not contain a key [type]: MapLike[{"block":"sgcommunity_pack:floral_compost"}]
    event.custom({
        type: "botanypots:soil",
        input: { item: "sgcommunity_pack:floral_compost" },
        display: { block: "sgcommunity_pack:floral_compost" },
        categories: ["floral"],
        growthModifier: 4
    });

    event.custom({
        type: "botanypots:soil",
        input: { item: "sgcommunity_pack:organic_compost" },
        display: { block: "sgcommunity_pack:organic_compost" },
        categories: ["organic"],
        growthModifier: 4
    });

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
// PLAYER LOGIN BOOK - PLEASE FIX
// ===============================

EntityEvents.spawned("minecraft:player", event => {
    let player = event.player;

    if (!player.stages.has("introbook")) {
        player.give(Item.of("minecraft:written_book", {
            title: "Welcome to Stargate: ReLeveled",
            author: "Telemort",
            pages: [
                "About this Pack\nUse the quest book.",
                "Easy Mode\nUse /easymode"
            ]
        }));

        player.stages.add("introbook");
    }
});


// ===============================
// DISABLE HOPPERS
// ===============================

BlockEvents.placed("minecraft:hopper", event => {
    event.player.sendSystemMessage(Text.of("Hoppers disabled. Use pipes."));
    event.cancel();
});
