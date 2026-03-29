// priority 2
ServerEvents.recipes(event => {
    // NOTES:
    // Register Naquadria Chemical for the naq substrate recipe
    // Register Molten Glass fluid
    // Register Blaze Gas
    // Register Doped Silicon Fluid
    // Update the texture for Iron Spool to mimic the Copper Spool to use in the Vac Tube recipe
    // Add the other bars of chocolate from confectionary to the `c:foods/chocolate` tag

    // Silicon Wafers
    registerChemicalDissolutionRecipe(event, {
        "amount": 10000,
        chemicalType: "gas",
        "gas": "mekanism:silicon"
    }, {
        amount: 10,
        "gas": "mekanism:blaze_gas"
    }, {
        "amount": 10,
        ingredient: {
            "item": "ae2:silicon"
        }
    });
    registerChemicalInfusionRecipe(event, {
        "amount": 10000,
        chemicalType: "gas",
        "gas": "mekanism:doped_silicon"
    }, {
        amount: 1,
        "gas": "mekanism:boron_trifluoride"
    }, {
        amount: 100,
        "gas": "mekanism:silicon"
    });
    registerCrystallizing(event, Item.SILICON_BOULE.getIdentifier(), {
        "amount": 5000,
        "gas": "mekanism:doped_silicon"
    });
    registerItemToGas(event, {
        "amount": 100,
        "gas": "mekanism:phosphorus"
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
            gas: "mekanism:phosphorus"
        }
    });
    registerItemToGas(event, {
        "amount": 250,
        "gas": "mekanism:blaze_gas"
    }, "c:dusts/blaze");
    registerItemToGas(event, {
        "amount": 1000,
        "gas": "mekanism:blaze_gas"
    }, "c:rods/blaze");
    registerItemToGas(event, {
        "amount": 5000,
        "gas": "mekanism:blaze_gas"
    }, "c:eggs/blaze");
    // Mekanism
    event.remove({
        id: "mekanism:teleporter"
    });
    event.remove({
        id: "mekanism:teleporter_frame"
    });
    event.remove({
        id: "mekanism:portable_teleporter"
    });
    // Create Vacuum Tube
    event.recipes.create.filling(MODID + ":liquid_glass_bucket", [Fluid.toBucket(MODID + ":liquid_glass"), "minecraft:bucket"]);
    event.recipes.create.filling(Item.GLASS_TUBE.getIdentifier(), [Fluid.toBucket(MODID + ":liquid_glass"), Item.SAND_MOLD.getIdentifier()]);
    event.recipes.create.mixing([Fluid.toAmount(MODID + ":liquid_glass", 800)], [Item.SILICA_DUST.getIdentifier()]).heated();
    event.blasting(MODID + ":liquid_glass_bucket", Item.SILICA_DUST_BUCKET.getIdentifier());
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
    // AE2WTLIB
    event.remove({
        id: "ae2wtlib:quantum_bridge_card"
    });
    // Blue Ice (testing recipe ig)
    new MultistepProcess().addStep(new MekanismInjectingStep("Water Vapor Injecting", {
        "amount": 20,
        "tag": "mekanism:water_vapor"
    }, "minecraft:snowball")).addStep(new MekanismInjectingStep("Water Vapor Injecting", {
        "amount": 20,
        "tag": "mekanism:water_vapor"
    })).addStep(new MekanismInjectingStep("Water Vapor Injecting", {
        "amount": 20,
        "tag": "mekanism:water_vapor"
    }, MultistepProcess.INTERMEDIATE_ITEM, "minecraft:blue_ice")).usingItem("minecraft:ice").register(event);
    // Gas upgrade sucks
    // - injecting
    // - dissolution
    // MOSFET (ngl, i give up on making accurate recipes)
    new MultistepProcess().addStep(new MekanismInjectingStep("Inject Silicon", {
        "amount": 5,
        "gas": "mekanism:silicon"
    }, Item.SILICON_WAFER.getIdentifier())).addStep(new MekanismInjectingStep("Inject Water Vapor", {
        "amount": 10,
        "tag": "mekanism:water_vapor"
    })).addStep(new MekanismInjectingStep("Etch Wafer", {
        "amount": 2,
        "gas": "mekanism:hydrofluoric_acid"
    })).addStep(new MekanismInjectingStep("Inject Boron", {
        "amount": 2,
        "gas": "mekanism:boron_trifluoride"
    })).addStep(new MekanismInjectingStep("Inject Phosphorus", {
        "amount": 1,
        "gas": "mekanism:phosphorus"
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
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "gas": "mekanism:hydrofluoric_acid"
        }))
        //nWell
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Phosphorus", {
            "amount": 1,
            "gas": "mekanism:phosphorus"
        }))
        //nMOS
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "gas": "mekanism:hydrofluoric_acid"
        }))
        //grow oxide (idk a good way to represent this step so ima leave it out)
        // polysilicon
        .addStep(new MekanismInjectingStep("Inject Silicon", {
            "amount": 5,
            "gas": "mekanism:silicon"
        })).addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "gas": "mekanism:hydrofluoric_acid"
        }))
        // p-type implantation
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Boron", {
            "amount": 2,
            "gas": "mekanism:boron_trifluoride"
        }))
        // n-type implantation
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 2,
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.IC_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Phosphorus", {
            "amount": 2,
            "gas": "mekanism:phosphorus"
        }, MultistepProcess.INTERMEDIATE_ITEM, Item.INTEGRATED_CIRCUIT_WAFER.getIdentifier())).usingItem(Item.INCOMPLETE_IC.getIdentifier()).register(event);
    registerAE2InscriberRecipe(event, Item.ADVANCED_PCB_SUBSTRATE.getIdentifier(), ["mekanism:hdpe_sheet", "minecraft:copper_ingot", "minecraft:copper_ingot"], true);
    registerAE2InscriberRecipe(event, Item.INTEGRATED_CIRCUIT.getIdentifier(), [Item.INTEGRATED_CIRCUIT_CHIP.getIdentifier(), Item.PURE_QUARTZ_GLASS.getIdentifier(), Item.ADVANCED_PCB_SUBSTRATE.getIdentifier()], true);
    // Slicing
    event.custom({
        "type": "mekanism:sawing",
        "input": {
            "ingredient": {
                "item": Item.INTEGRATED_CIRCUIT_WAFER.getIdentifier()
            }
        },
        "mainOutput": {
            "count": 4,
            "item": Item.INTEGRATED_CIRCUIT_CHIP.getIdentifier()
        }
    });
    // Boron stuff
    event.custom({
        type: "mekanism:dissolution",
        gasInput: {
            amount: 5,
            gas: "mekanism:sulfuric_acid"
        },
        itemInput: {
            ingredient: {
                tag: "c:ores/borax"
            }
        },
        output: {
            amount: 5000,
            chemicalType: "gas",
            gas: "mekanism:boron_trioxide"
        }
    });
    event.custom({
        type: "mekanism:chemical_infusing",
        leftInput: {
            amount: 6,
            gas: "mekanism:hydrofluoric_acid"
        },
        output: {
            amount: 2,
            gas: "mekanism:boron_trifluoride"
        },
        rightInput: {
            amount: 1,
            gas: "mekanism:boron_trioxide"
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
            "gas": "mekanism:tree_sap"
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
            "gas": "mekanism:tree_sap"
        }
    });
    registerChemicalDissolutionRecipe(event, {
        chemicalType: "gas",
        "amount": 1000,
        "gas": "mekanism:photoresist"
    }, {
        chemicalType: "gas",
        "amount": 5,
        "gas": "mekanism:tree_sap"
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
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "gas": "mekanism:hydrofluoric_acid"
        }))
        //nWell
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Phosphorus", {
            "amount": 1,
            "gas": "mekanism:phosphorus"
        }))
        //nMOS
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "gas": "mekanism:hydrofluoric_acid"
        }))
        //grow oxide (idk a good way to represent this step so ima leave it out)
        // polysilicon
        .addStep(new MekanismInjectingStep("Inject Silicon", {
            "amount": 5,
            "gas": "mekanism:silicon"
        })).addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Etch Wafer", {
            "amount": 2,
            "gas": "mekanism:hydrofluoric_acid"
        }))
        // p-type implantation
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Uranium Hexafluoride", {
            "amount": 2,
            "gas": "mekanism:uranium_hexafluoride"
        }))
        // n-type implantation
        .addStep(new MekanismInjectingStep("Apply Photoresist", {
            "amount": 1,
            "gas": "mekanism:photoresist"
        })).addStep(new Ae2InscribingStep("Expose Photoresist", {
            top: Item.ISO_PHOTOMASK.getIdentifier()
        })).addStep(new MekanismInjectingStep("Inject Phosphorus", {
            "amount": 1,
            "gas": "mekanism:phosphorus"
        }, MultistepProcess.INTERMEDIATE_ITEM, Item.ISOTOPIC_DECAY_OSCILLATOR_WAFER.getIdentifier())).usingItem(Item.INCOMPLETE_ISOTOPIC_DECAY_OSCILLATOR_WAFER.getIdentifier()).register(event);
    // DHDs
    event.custom({
        type: "minecraft:smithing_transform",
        addition: {
            type: "forge:nbt",
            item: "sgjourney:stargate_upgrade_crystal",
            nbt: JSON.stringify({
                Type: "sgjourney:milky_way_stargate"
            })
        },
        base: {
            item: "sgjourney:classic_dhd"
        },
        result: {
            item: "sgjourney:milky_way_dhd"
        },
        template: {
            item: "minecraft:netherite_upgrade_smithing_template"
        }
    });
    event.custom({
        type: "minecraft:smithing_transform",
        addition: {
            type: "forge:nbt",
            item: "sgjourney:stargate_upgrade_crystal",
            nbt: JSON.stringify({
                Type: "sgjourney:pegasus_stargate"
            })
        },
        base: {
            item: "sgjourney:classic_dhd"
        },
        result: {
            item: "sgjourney:pegasus_dhd"
        },
        template: {
            item: "minecraft:netherite_upgrade_smithing_template"
        }
    });
    event.custom({
        type: "mekanism:crystallizing",
        chemicalType: "gas",
        input: {
            amount: 1000,
            gas: "mekanism:tree_sap"
        },
        output: {
            item: "pamhc2trees:maplesyrupitem"
        }
    });
    event.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
            "amount": 100,
            "fluid": "sgjourney:liquid_naquadah"
        },
        "gasInput": {
            "amount": 25,
            "gas": "mekanism:plutonium"
        },
        "gasOutput": {
            "amount": 1,
            "gas": "mekanism:naquadria"
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
    // PamHc2 compat
    event.recipes.create.mixing("pamhc2foodcore:butteritem", [{
        fluid: "milk",
        amount: 1000
    }, "pamhc2foodcore:potitem"]);
    // Nuke energy pipes
    event.remove({
        id: "pipez:energy_pipe"
    });
    event.remove({
        id: "pipez:universal_pipe"
    });
    event.shaped({
        item: "pipez:universal_pipe",
        count: 6
    }, ["igf", "ere", "igf"], {
        "i": "pipez:item_pipe",
        "g": "pipez:gas_pipe",
        "f": "pipez:fluid_pipe",
        "r": "#c:storage_blocks/redstone",
        "e": "#c:ingots/iron"
    });
    // Phosphorus
    registerChemicalInjectionRecipe(event, {
        chemicalType: "gas",
        gas: "mekanism:sulfuric_acid",
        amount: 2
    }, Item.PHOSPHORUS.getIdentifier(), "mekanism:bio_fuel");
});
