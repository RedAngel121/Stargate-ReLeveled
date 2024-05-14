// priority: 1
// Visit the wiki for more info - https://kubejs.com/

// TODO:Remove Fluix Researcher Trades

// Remove Computer Scientist Trades
MoreJSEvents.villagerTrades(event => {
  event.forEachTrades("advancedperipherals:computer_scientist", [1, 5], listings => {
    listings.removeIf(() => true);
  });
});
let VillagerTrade = Java.loadClass("de.srendi.advancedperipherals.common.village.VillagerTrade");
MoreJSEvents.wandererTrades(event => {
  // Nuke Advanced Peripherals trades
  event.getTrades(1).removeIf(trade => trade.getClass() == VillagerTrade);
  event.getTrades(2).removeIf(trade => trade.getClass() == VillagerTrade);
  // what were they even thinking
  event.removeTrades({
    firstItem: Ingredient.all,
    secondItem: Ingredient.all,
    outputItem: Ingredient.of("minecraft:beacon")
  });
});
let floralCompostItems = ['minecraft:wither_rose', 'minecraft:orange_tulip', 'minecraft:rose_bush', 'biomesoplenty:wilted_lily', 'minecraft:cornflower', 'biomesoplenty:jacaranda_leaves', 'minecraft:flowering_azalea_leaves', 'biomesoplenty:pink_hibiscus', 'biomesoplenty:rose', 'biomesoplenty:flowering_oak_leaves', 'biomesoplenty:goldenrod', 'minecraft:blue_orchid', 'minecraft:white_tulip', 'minecraft:cherry_leaves', 'minecraft:lily_of_the_valley', 'biomesoplenty:icy_iris', 'biomesoplenty:snowblossom_leaves', 'minecraft:pitcher_plant', 'minecraft:allium', 'biomesoplenty:blue_hydrangea', 'biomesoplenty:orange_cosmos', 'biomesoplenty:burning_blossom', 'biomesoplenty:tall_lavender', 'minecraft:flowering_azalea', 'minecraft:pink_petals', 'minecraft:azure_bluet', 'minecraft:poppy', 'minecraft:torchflower', 'biomesoplenty:pink_daffodil', 'biomesoplenty:lavender', 'minecraft:mangrove_propagule', 'minecraft:red_tulip', 'biomesoplenty:violet', 'biomesoplenty:glowflower', 'minecraft:peony', 'minecraft:sunflower', 'biomesoplenty:white_petals', 'biomesoplenty:wildflower', 'minecraft:dandelion', 'minecraft:pink_tulip', 'minecraft:oxeye_daisy', 'minecraft:lilac'];
let mulchItems = Ingredient.of("minecraft:saplings").getItemIds();
let coralCompostItems = Ingredient.of("#minecraft:flowers").getItemIds();
let organicCompostItems = Ingredient.of("#forge:crops").getItemIds();
ServerEvents.recipes(event => {
  event.forEachRecipe({
    mod: "botanytrees",
    type: "botanypots:crop"
  }, recipe => {
    recipe.json.add("categories", ["dirt", "mulch"]);
  });
  function notCategories(element, categories) {
    let out = true;
    element.getAsJsonArray("categories").forEach(cat => {
      if (categories.includes(cat.getAsString())) {
        out = false;
      }
    });
    return out;
  }
  event.forEachRecipe({
    mod: "botanypots",
    type: "botanypots:crop"
  }, recipe => {
    let seed = recipe.json.get("seed");
    if (seed.isJsonObject()) {
      if (floralCompostItems.includes(seed.getAsJsonObject().get("item").getAsString())) {
        recipe.json.getAsJsonArray("categories")["add(java.lang.String)"]("floral");
        return;
      } else {
        if (notCategories(recipe.json, ["water", "end", "nether", "log", "wood", "jungle_wood"])) {
          recipe.json.getAsJsonArray("categories")["add(java.lang.String)"]("organic");
        }
        return;
      }
    }
    if (seed.isJsonArray()) {
      seed.getAsJsonArray().forEach(element => {
        if (element.isJsonObject()) {
          if (floralCompostItems.includes(element.getAsJsonObject().get("item").getAsString())) {
            recipe.json.getAsJsonArray("categories")["add(java.lang.String)"]("floral");
            return;
          } else {
            if (notCategories(recipe.json, ["water", "end", "nether", "log", "wood", "jungle_wood"])) {
              recipe.json.getAsJsonArray("categories")["add(java.lang.String)"]("organic");
            }
            return;
          }
        }
      });
    }
  });
  for (let tierName in Tier) {
    let tier = Tier[tierName];
    for (let materialName in tier.materials) {
      let materialValue = tier.materials[materialName];
      registerBotanyCrop(event, tier.substrate, materialValue, Materials[materialName]);
    }
  }
  for (let substrateName in Substrate) {
    let substrate = Substrate[substrateName];
    registerBotanySoil(event, substrate);
  }
  event.custom({
    type: "botanypots:soil",
    input: {
      item: Blocks.COMPOST_MULCH.getIdentifier()
    },
    display: {
      block: Blocks.COMPOST_MULCH.getIdentifier()
    },
    categories: ["log", "wood", "jungle_wood", "wood", "mushroom", "mulch"],
    growthModifier: 4
  });
  event.custom({
    type: "botanypots:soil",
    input: {
      item: Blocks.COMPOST_CORAL.getIdentifier()
    },
    display: {
      block: Blocks.COMPOST_CORAL.getIdentifier()
    },
    categories: ["water"],
    growthModifier: 4
  });
  event.custom({
    type: "botanypots:soil",
    input: {
      item: Blocks.COMPOST_FLORAL.getIdentifier()
    },
    display: {
      block: Blocks.COMPOST_FLORAL.getIdentifier()
    },
    categories: ["floral"],
    growthModifier: 4
  });
  event.custom({
    type: "botanypots:soil",
    input: {
      item: Blocks.COMPOST_ORGANIC.getIdentifier()
    },
    display: {
      block: Blocks.COMPOST_ORGANIC.getIdentifier()
    },
    categories: ["organic"],
    growthModifier: 4
  });
});
ServerEvents.tags("block", event => {
  event.add("sgjourney:kawoosh_immune", "gravestone:gravestone");
});
ServerEvents.tags("item", event => {
  event.add(Tags.CONVERT_MOSFET, "minecraft:redstone");
  event.add(Tags.CONVERT_IC, "mekanism:ingot_osmium");
  event.add(Tags.CONVERT_COMPUTATION_CORE, "mekanism:advanced_control_circuit");
  event.add(Tags.CONVERT_ISO, "mekanism:ingot_uranium");
});
function easyModeOn(sender) {
  let player = sender.getPlayer();
  player.stages.add("easymode");
  sender.sendSuccess(Text.of("You are now in easy mode"), true);
}
function easyModeOff(sender) {
  let player = sender.getPlayer();
  player.stages.remove("easymode");
  player.data.ftbquests.reset("5C938F25D0F5D112");
  sender.sendSuccess(Text.of("You are no longer in easy mode"), true);
}
function toggleEasyMode(sender) {
  let player = sender.getPlayer();
  if (player.stages.has("easymode")) {
    easyModeOff(sender);
  } else {
    easyModeOn(sender);
  }
  return 1;
}
function displayEasyModeHelp(sender) {
  sender.sendSuccess(Text.of("Easy mode allows you to skip some of the more ridiculous progression steps of the modpack. \
When easy mode is enabled, your quest book will be updated to show all the quests, and you will get access to the oredictionificator to convert items.\n\
/easymode toggle will toggle easymode on and off\n\
By using /easymode getconverter, you will be given the oredictionificator\n\
To use it, you need to add a filter. You can use the following tags:\n\
  - convert:mosfet, converts redstone to MOSFETs\n\
  - convert:ic, converts osmium ingots to Integrated Circuits\n\
  - convert:computation_core, converts advanced control circuits into computation cores\n\
  - convert:isotopic_oscillator, converts uranium into isotopic oscillators\n\
After you enter a tag, you just need to insert items to convert them!"), true);
  return 1;
}
function giveConverter(sender) {
  let player = sender.getPlayer();
  player.give("mekanism:oredictionificator");
  sender.sendSuccess(Text.of("Gave Oredictionificator"), true);
  return 1;
}
ServerEvents.commandRegistry(event => {
  const Commands = event.commands,
    Arguments = event.arguments;
  event.register(Commands.literal('easymode') // The name of the command
    .requires(s => s.isPlayer()) // Check if the player has operator privileges
    .executes(c => displayEasyModeHelp(c.getSource())) // Toggle flight for the player that ran the command if the `target` argument isn't included
    .then(Commands.literal('toggle').executes(c => toggleEasyMode(c.getSource()))).then(Commands.literal('help').executes(c => displayEasyModeHelp(c.getSource()))).then(Commands.literal('getconverter').executes(c => giveConverter(c.getSource()))));
});
EntityEvents.spawned("minecraft:player", event => {
  if (!event.getPlayer().stages.has("introbook")) {
    event.getPlayer().give(KItem.of("minecraft:written_book", {
      pages: ['["",{"text":"About this Pack","bold":true},{"text":"\\nThis modpack has quests. You can either bind the questbook to a key or open the questbook from the top left corner of your screen while in your inventory.\\n(see next page for info about easymode)\\n ","color":"reset"}]', '["",{"text":"Easy Mode","bold":true},{"text":"\\nEasy Mode gets rid of the requirement for crafting circuits. This makes it more like the default experience for mekanism and create. For more info, use /easymode.","color":"reset"}]'],
      title: "Welcome to Stargate: Leveled",
      author: "Telemort",
      display: {
        Lore: ["Info about this Modpack"]
      }
    }));
    event.getPlayer().stages.add("introbook");
  }
});
BlockEvents.placed("hopper", event => {
  console.log("block placed");
  event.player.sendSystemMessage(Text.of("Hoppers are disabled because they are mega laggy. Use item pipes (@pipez) instead"));
  event.cancel();
});
