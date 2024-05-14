// priority: 9
function parseMekanismIngredient(input) {
  if (typeof input == "string") {
    if (input.substring(0, 1) == "#") {
      return {
        "ingredient": {
          "tag": input.substring(1)
        },
        "amount": 1
      };
    } else {
      return {
        "ingredient": {
          "item": input
        },
        "amount": 1
      };
    }
  }
  if (typeof input == "object") {
    if (input.ingredient) {
      return input;
    } else {
      if (input.item) {
        var _input$amount;
        return {
          "ingredient": {
            "item": input.item
          },
          "amount": (_input$amount = input.amount) !== null && _input$amount !== void 0 ? _input$amount : 1
        };
      }
      if (input.tag) {
        var _input$amount2;
        return {
          "ingredient": {
            "tag": input.tag
          },
          "amount": (_input$amount2 = input.amount) !== null && _input$amount2 !== void 0 ? _input$amount2 : 1
        };
      }
    }
  }
}
function registerChemicalDissolutionRecipe(event, output, gasInput, itemInput) {
  event.custom({
    type: "mekanism:dissolution",
    itemInput: parseMekanismIngredient(itemInput),
    gasInput: gasInput,
    output: output
  });
}
function registerChemicalInjectionRecipe(event, chemicalInput, itemOutput, itemInput) {
  event.custom({
    type: "mekanism:injecting",
    itemInput: parseMekanismIngredient(itemInput),
    chemicalInput: chemicalInput,
    output: KItem.of(itemOutput)
  });
}
function registerChemicalInfusionRecipe(event, output, leftInput, rightInput) {
  event.custom({
    type: "mekanism:chemical_infusing",
    leftInput: leftInput,
    rightInput: rightInput,
    output: output
  });
}
function registerItemToGas(event, output, input) {
  event.custom({
    "type": "mekanism:gas_conversion",
    "input": {
      "ingredient": {
        "tag": input
      }
    },
    "output": output
  });
}
function registerCrystallizing(event, output, input) {
  event.custom({
    "type": "mekanism:crystallizing",
    "chemicalType": "gas",
    "input": input,
    "output": {
      item: output
    }
  });
}
function registerMetallurgicInfusing(event, inputChemicalIngredient, inputIngredient, outputItem) {
  event.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": inputChemicalIngredient,
    "itemInput": parseMekanismIngredient(inputIngredient),
    "output": {
      "item": outputItem
    }
  });
}
