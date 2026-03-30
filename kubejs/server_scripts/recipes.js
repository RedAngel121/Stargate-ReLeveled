// priority 2
ServerEvents.recipes(event => {
    // NOTES:
    // Update the texture for Iron Spool to mimic the Copper Spool to use in the Vac Tube recipe
    // Add the other bars of chocolate from confectionary to the `c:foods/chocolate` tag
    // Add c:salt tag to other salt items for pams compat (tag + tag)

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
});