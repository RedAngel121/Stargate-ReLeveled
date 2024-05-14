//priority: 9
function parseItemStack(input) {
  if (typeof input == "string") {
    if (input.substring(0, 1) == "#") {
      return {
        "tag": input.substring(1),
        "amount": 1
      };
    } else {
      return {
        "item": input,
        "amount": 1
      };
    }
  }
  if (typeof input == "object") {
    if (input instanceof Item) {
      return parseItemStack(input.getIdentifier());
    }
    return input;
  }
  throw new Error("Unable to parse ItemStack of unsupported type" + typeof input);
}
function parseStack(entry) {
  if (typeof entry == "string") {
    if (entry.substring(0, 1) == "#") {
      return {
        "tag": entry.substring(1),
        "amount": 1
      };
    } else {
      return {
        "item": entry,
        "amount": 1
      };
    }
  }
  if (typeof entry == "object") {
    if (entry instanceof Item) {
      return parseItemStack(entry.getIdentifier());
    }
    return entry;
  }
  throw new Error("Unable to parse Stack of unsupported type" + typeof entry);
}
function parseStacks(input) {
  let out = [];
  for (let entry of input) {
    if (typeof entry == "string") {
      if (entry.substring(0, 1) == "#") {
        out.push({
          "tag": entry.substring(1),
          "amount": 1
        });
      } else {
        out.push({
          "item": entry,
          "amount": 1
        });
      }
      continue;
    }
    if (typeof entry == "object") {
      if (entry instanceof Item) {
        out.push(parseItemStack(entry.getIdentifier()));
        continue;
      }
      out.push(entry);
    }
    throw new Error("Unable to parse Stack of unsupported type" + typeof entry);
  }
  return out;
}
function registerAE2InscriberRecipeTagMiddle(event, out, input) {
  let shouldPress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let ingredients = {};
  ingredients.middle = {
    tag: input[0]
  };
  if (input[1]) {
    ingredients.top = {
      item: input[1]
    };
  }
  if (input[2]) {
    ingredients.bottom = {
      item: input[2]
    };
  }
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": ingredients,
    "result": {
      item: out
    },
    "mode": shouldPress ? "press" : "inscribe"
  });
}
function registerAE2InscriberRecipe(event, out, input) {
  let shouldPress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let ingredients = {};
  ingredients.middle = parseItemStack(input[0]);
  if (input[1]) {
    ingredients.top = parseItemStack(input[1]);
  }
  if (input[2]) {
    ingredients.bottom = parseItemStack(input[2]);
  }
  let recipe = {
    "type": "ae2:inscriber",
    "ingredients": ingredients,
    "result": {
      item: out
    },
    "mode": shouldPress ? "press" : "inscribe"
  };
  console.log(recipe);
  event.custom(recipe);
}
function registerBotanyCrop(event, substrate, multiplier, material) {
  var _material$growthTicks;
  let drops = [];
  for (let drop of material.drops) {
    var _drop$chance, _drop$min, _drop$max;
    drops.push({
      chance: (_drop$chance = drop.chance) !== null && _drop$chance !== void 0 ? _drop$chance : 1,
      minRolls: (_drop$min = drop.min) !== null && _drop$min !== void 0 ? _drop$min : 1,
      maxRolls: (_drop$max = drop.max) !== null && _drop$max !== void 0 ? _drop$max : 1,
      output: {
        item: drop.item
      }
    });
  }
  event.custom({
    type: "botanypots:crop",
    seed: {
      item: material.item
    },
    categories: [substrate.getName()],
    growthTicks: Math.floor((_material$growthTicks = material.growthTicks) !== null && _material$growthTicks !== void 0 ? _material$growthTicks : (1200 / multiplier)),
    display: {
      block: material.display
    },
    drops: drops
  });
}
function registerBotanySoil(event, substrate) {
  event.custom({
    type: "botanypots:soil",
    input: {
      item: substrate.getIdentifier()
    },
    display: {
      block: substrate.getIdentifier()
    },
    categories: [substrate.getName()],
    growthModifier: 1
  });
}
