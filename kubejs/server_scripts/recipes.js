// priority 2
ServerEvents.recipes(event => {
    // NOTES:
    // Register Chemicals: naquadria, silicon, blaze_gas, doped_silicon, boron_trifluoride, boron_trioxide, phosphorus, photoresist, tree_sap
    // Update the texture for Iron Spool to mimic the Copper Spool to use in the Vac Tube recipe
    // Add the other bars of chocolate from confectionary to the `c:foods/chocolate` tag
    // Add c:salt tag to other salt items for pams compat (tag + tag)

    event.custom({
        type: "mekanism:crystallizing",
        input: {
            amount: 1000,
            chemical: "mekanism:tree_sap"
        },
        output: {
            item: "pamhc2trees:maplesyrupitem"
        }
    });

    // Remove easy rocket engines
    event.remove("ad_astra:steel_engine");
    event.remove("ad_astra:desh_engine");
    event.remove("ad_astra:ostrum_engine");
    event.remove("ad_astra:calorite_engine");
    // Add hard engines
    event.shaped(Item.of("ad_astra:steel_engine", 1), ["SSS", "ECE", " F "], {
        S: "#c:plates/steel",
        C: Item.RCU.getIdentifier(),
        E: "ad_astra:engine_frame",
        F: "ad_astra:engine_fan"
    });
    event.shaped(Item.of("ad_astra:desh_engine", 1), ["SSS", "ECE", " F "], {
        S: "#c:plates/desh",
        C: Item.RCU.getIdentifier(),
        E: "ad_astra:engine_frame",
        F: "ad_astra:engine_fan"
    });
    event.shaped(Item.of("ad_astra:ostrum_engine", 1), ["SSS", "ECE", " F "], {
        S: "#c:plates/ostrum",
        C: Item.RCU.getIdentifier(),
        E: "ad_astra:engine_frame",
        F: "ad_astra:engine_fan"
    });
    event.shaped(Item.of("ad_astra:calorite_engine", 1), ["SSS", "ECE", " F "], {
        S: "#c:plates/calorite",
        C: Item.RCU.getIdentifier(),
        E: "ad_astra:engine_frame",
        F: "ad_astra:engine_fan"
    });

    // Silicon Wafers
    registerChemicalDissolutionRecipe(event, {
        "amount": 10000,
        "chemical": "mekanism:silicon"
    }, {
        amount: 10,
        "chemical": "mekanism:blaze_gas"
    }, {
        "amount": 10,
        ingredient: {
            "item": "ae2:silicon"
        }
    });
    registerChemicalInfusionRecipe(event, {
        "amount": 10000,
        "chemical": "mekanism:doped_silicon"
    }, {
        amount: 1,
        "chemical": "mekanism:boron_trifluoride"
    }, {
        amount: 100,
        "chemical": "mekanism:silicon"
    });
    registerCrystallizing(event, Item.SILICON_BOULE.getIdentifier(), {
        "amount": 5000,
        "chemical": "mekanism:doped_silicon"
    });
    registerItemTochemical(event, {
        "amount": 100,
        "chemical": "mekanism:phosphorus"
    }, "c:phosphorus");
    event.custom({
        type: "mekanism:oxidizing",
        input: {
            ingredient: {
                item: Item.PHOSPHORUS.getIdentifier()
            }
        },
        output: {
            amount: 200,
            chemical: "mekanism:phosphorus"
        }
    });
    registerItemTochemical(event, {
        "amount": 250,
        "chemical": "mekanism:blaze_gas"
    }, "c:dusts/blaze");
    registerItemTochemical(event, {
        "amount": 1000,
        "chemical": "mekanism:blaze_gas"
    }, "c:rods/blaze");
    registerItemTochemical(event, {
        "amount": 5000,
        "chemical": "mekanism:blaze_gas"
    }, "c:eggs/blaze");

    // --- START MULTISTEP BULLSHIT ---
    // MOSFET
    new MultistepProcess().addStep(new MekanismInjectingStep("Inject Silicon", {
        "amount": 5,
        "chemical": "mekanism:silicon"
    }, Item.SILICON_WAFER.getIdentifier())).addStep(new MekanismInjectingStep("Inject Water Vapor", {
        "amount": 10,
        "tag": "mekanism:water_vapor"
    })).addStep(new MekanismInjectingStep("Etch Wafer", {
        "amount": 2,
        "chemical": "mekanism:hydrofluoric_acid"
    })).addStep(new MekanismInjectingStep("Inject Boron", {
        "amount": 2,
        "chemical": "mekanism:boron_trifluoride"
    })).addStep(new MekanismInjectingStep("Inject Phosphorus", {
        "amount": 1,
        "chemical": "mekanism:phosphorus"
    }, MultistepProcess.INTERMEDIATE_ITEM, Item.MOSFET_WAFER.getIdentifier())).usingItem(Item.INCOMPLETE_MOSFET_WAFER.getIdentifier()).register(event);
    // Slicing
    event.custom({
        "type": "mekanism:sawing",
        "input": {
            "ingredient": {
                "item": Item.MOSFET_WAFER.getIdentifier()
            }
        },
        "mainOutput": {
            "count": 32,
            "item": Item.MOSFET_CHIP.getIdentifier()
        }
    });
    event.custom({
        "type": "mekanism:combining",
        "extraInput": {
            "ingredient": {
                "item": "minecraft:copper_ingot"
            }
        },
        "mainInput": {
            "ingredient": {
                "item": Item.MOSFET_CHIP.getIdentifier()
            }
        },
        "output": {
            "count": 1,
            "item": Item.MOSFET.getIdentifier()
        }
    });
    // Integrated Circuit
    new MultistepProcess()
        // Oxide layer
        .addStep(new MekanismInjectingStep("Inject Water Vapor", {
            "amount": 5,
            "tag": "mekanism:water_vapor"
        }, Item.SILICON_WAFER.getIdentifier())).addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "chemical": "mekanism:hydrofluoric_acid"
        }))
        //nWell
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Phosphorus", {
            "amount": 1,
            "chemical": "mekanism:phosphorus"
        }))
        //nMOS
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "chemical": "mekanism:hydrofluoric_acid"
        }))
        //grow oxide (idk a good way to represent this step so ima leave it out)
        // polysilicon
        .addStep(new MekanismInjectingStep("Inject Silicon", {
            "amount": 5,
            "chemical": "mekanism:silicon"
        })).addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "chemical": "mekanism:hydrofluoric_acid"
        }))
        // p-type implantation
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Boron", {
            "amount": 2,
            "chemical": "mekanism:boron_trifluoride"
        }))
        // n-type implantation
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Phosphorus", {
            "amount": 2,
            "chemical": "mekanism:phosphorus"
        }, MultistepProcess.INTERMEDIATE_ITEM, Item.INTEGRATED_CIRCUIT_WAFER.getIdentifier())).usingItem(Item.INCOMPLETE_IC.getIdentifier()).register(event);

    // Boron stuff
    event.custom({
        type: "mekanism:dissolution",
        chemicalInput: {
            amount: 5,
            chemical: "mekanism:sulfuric_acid"
        },
        itemInput: {
            ingredient: {
                tag: "c:ores/borax"
            }
        },
        output: {
            amount: 5000,
            chemical: "mekanism:boron_trioxide"
        }
    });
    event.custom({
        type: "mekanism:chemical_infusing",
        leftInput: {
            amount: 6,
            chemical: "mekanism:hydrofluoric_acid"
        },
        output: {
            amount: 2,
            chemical: "mekanism:boron_trifluoride"
        },
        rightInput: {
            amount: 1,
            chemical: "mekanism:boron_trioxide"
        }
    });
    // photoresist
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
            "ingredient": {
                "tag": "minecraft:saplings"
            }
        },
        "output": {
            "amount": 1000,
            "chemical": "mekanism:tree_sap"
        }
    });
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
            "ingredient": {
                "item": "pamhc2trees:maplesyrupitem"
            }
        },
        "output": {
            "amount": 1000,
            "chemical": "mekanism:tree_sap"
        }
    });
    registerChemicalDissolutionRecipe(event, {
        "amount": 1000,
        "chemical": "mekanism:photoresist"
    }, {
        "amount": 5,
        "chemical": "mekanism:tree_sap"
    }, "minecraft:glowstone_dust");

    //====Edible Processor====\\
    // Wafer recipe
    new MultistepProcess().addStep(new CreateMixingStep("Cream Butter and Sugar", {
        input: ["#c:sugar", "#c:butter"]
    })).addStep(new CreateMixingStep("Add Eggs and Vanilla", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, {
            tag: "c:egg",
            amount: 2
        }, "pamhc2foodextended:vanillaitem"]
    })).addStep(new CreateMixingStep("Mix in some flour", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, {
            tag: "c:flour",
            amount: 1
        }]
    })).addStep(new CreateMixingStep("Mix in some more flour", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, {
            tag: "c:flour",
            amount: 1
        }]
    })).addStep(new CreateMixingStep("Mix in Sodium Bicarbonate", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, Item.SODIUM_BICARBONATE]
    })).addStep(new MinecraftSmokingStep("Bake", {
        output: Item.WAFER
    })).usingItem(Item.WAFER_DOUGH.getIdentifier()).register(event);
    // Edible Processor Wafer
    new MultistepProcess().addStep(new CreateFillingStep("Apply Honey", {
        input: [Item.WAFER, {
            fluid: "create:honey",
            amount: 500
        }]
    })).addStep(new CreateMixingStep("Mix with Maple Syrup", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, "pamhc2trees:maplesyrupitem"]
    }).heated()).addStep(new Ae2InscribingStep("Harden Syrup", {
        top: Item.EP_PHOTOMASK.getIdentifier()
    })).addStep(new CreateFillingStep("Etch Wafer with Milk", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, {
            fluid: "minecraft:milk",
            amount: 1000
        }]
    })).addStep(new CreateMixingStep("Mix with Maple Syrup", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, "pamhc2trees:maplesyrupitem"]
    }).heated()).addStep(new Ae2InscribingStep("Harden Syrup", {
        top: Item.EP_PHOTOMASK.getIdentifier()
    })).addStep(new CreateFillingStep("Apply Chocolate", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, {
            fluid: "create:chocolate",
            amount: 500
        }]
    })).addStep(new CreateMixingStep("Mix with Maple Syrup", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, "pamhc2trees:maplesyrupitem"]
    }).heated()).addStep(new Ae2InscribingStep("Harden Syrup", {
        top: Item.EP_PHOTOMASK.getIdentifier()
    })).addStep(new CreateFillingStep("Etch Wafer with Milk", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, {
            fluid: "minecraft:milk",
            amount: 1000
        }]
    })).addStep(new CreateDeployingStep("Sprinkle Sugar", {
        input: [MultistepProcess.INTERMEDIATE_ITEM, "#c:sugar"]
    })).addStep(new MinecraftSmokingStep("Caramelize Sugar", {
        output: Item.EDIBLE_PROCESSOR_WAFER
    })).usingItem(Item.INCOMPLETE_EDIBLE_PROCESSOR_WAFER.getIdentifier()).register(event);

    new MultistepProcess()
        // Oxide layer
        .addStep(new MekanismInjectingStep("Inject Water Vapor", {
            "amount": 5,
            "tag": "mekanism:water_vapor"
        }, Item.URANIUM_WAFER.getIdentifier())).addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "chemical": "mekanism:hydrofluoric_acid"
        }))
        //nWell
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Phosphorus", {
            "amount": 1,
            "chemical": "mekanism:phosphorus"
        }))
        //nMOS
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "chemical": "mekanism:hydrofluoric_acid"
        }))
        // polysilicon
        .addStep(new MekanismInjectingStep("Inject Silicon", {
            "amount": 5,
            "chemical": "mekanism:silicon"
        })).addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "chemical": "mekanism:hydrofluoric_acid"
        }))
        // p-type implantation
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Uranium Hexafluoride", {
            "amount": 2,
            "chemical": "mekanism:uranium_hexafluoride"
        }))
        // n-type implantation
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "chemical": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Phosphorus", {
            "amount": 1,
            "chemical": "mekanism:phosphorus"
        }, MultistepProcess.INTERMEDIATE_ITEM, Item.ISOTOPIC_DECAY_OSCILLATOR_WAFER.getIdentifier())).usingItem(Item.INCOMPLETE_ISOTOPIC_DECAY_OSCILLATOR_WAFER.getIdentifier()).register(event);
    event.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
            "amount": 100,
            "fluid": "sgjourney:liquid_naquadah"
        },
        "chemicalInput": {
            "amount": 25,
            "chemical": "mekanism:plutonium"
        },
        "chemicalOutput": {
            "amount": 1,
            "chemical": "mekanism:naquadria"
        },
        "itemInput": {
            "ingredient": {
                item: "sgjourney:pure_naquadah"
            }
        },
        "itemOutput": {
            "item": "sgjourney:raw_naquadah"
        }
    });
});
