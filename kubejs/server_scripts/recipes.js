// priority 2
// This is gonna be awful
ServerEvents.recipes(event => {
  // Iron Substrate
  event.shaped(Item.of(Substrate.IRON, 1), ["IbI", "bBb", "IbI"], {
    "I": "minecraft:iron_ingot",
    "b": "minecraft:iron_bars",
    "B": "minecraft:iron_block"
  });
  // Gold Substrate
  event.shaped(Item.of(Substrate.GOLD, 1), ["ggg", "GgG", "ggg"], {
    "g": "minecraft:gold_ingot",
    "G": "minecraft:gold_block"
  });
  event.shaped(Item.of(Substrate.GOLD, 1), ["nnn", "bBb", "nnn"], {
    "n": "minecraft:gold_nugget",
    "b": "minecraft:gold_block",
    "B": Substrate.IRON.getIdentifier()
  });
  // Diamond Substrate
  event.shaped(Item.of(Substrate.DIAMOND, 1), ["dbd", "GdG", "dbd"], {
    "d": "minecraft:diamond",
    "b": "minecraft:iron_bars",
    "G": "minecraft:gold_block"
  });
  event.shaped(Item.of(Substrate.DIAMOND, 1), ["dbd", "bGb", "dbd"], {
    "d": "minecraft:diamond",
    "b": "minecraft:iron_bars",
    "G": Substrate.GOLD.getIdentifier()
  });
  // Netherite Substrate
  event.smithing(Substrate.NETHERITE.getIdentifier(), "minecraft:netherite_upgrade_smithing_template", Substrate.DIAMOND.getIdentifier(), "minecraft:netherite_ingot");
  // Kinetic Substrate
  event.recipes.create.mechanical_crafting(Substrate.KINETIC.getIdentifier(), [
    //spell-checker: disable
    "ppppp", "svvvs", "scncs", "sdvds", "sppps"], {
    //spell-checker: enable
    "p": "minecraft:paper",
    "v": "#" + Tags.CIRCUIT_BASIC,
    "s": "minecraft:stone",
    "d": "create:mechanical_drill",
    "c": "create:large_cogwheel",
    "n": Substrate.NETHERITE.getIdentifier()
  });
  // Computational Substrate
  event.shaped(Substrate.COMPUTATIONAL.getIdentifier(), ["tft", "dkd", "scs"], {
    "t": "ae2:terminal",
    "f": "ae2:formation_plane",
    "d": "ae2:dense_energy_cell",
    "k": Substrate.KINETIC.getIdentifier(),
    "s": "#ae2:smart_cable",
    "c": "ae2:controller"
  });
  // Mekanised Substrate
  registerMetallurgicInfusing(event, {
    amount: 20,
    tag: "mekanism:refined_obsidian"
  }, Substrate.COMPUTATIONAL.getIdentifier(), Substrate.MEKANISED.getIdentifier());
  // Reactive Substrate
  event.shaped(Substrate.REACTIVE.getIdentifier(), ["iui", "usu", "iui"], {
    i: Item.ISOTOPIC_DECAY_OSCILLATOR.getIdentifier(),
    u: "mekanism:ingot_uranium",
    s: Substrate.MEKANISED.getIdentifier()
  });
  // Deep Space Substrate
  event.shaped(Substrate.DEEP_SPACE.getIdentifier(), ["pcp", "csc", "pcp"], {
    p: "mekanism:pellet_plutonium",
    c: "ad_astra:calorite_ingot",
    s: Substrate.REACTIVE.getIdentifier()
  });
  // Naquadria Substrate
  event.shaped(Blocks.INACTIVE_NAQUADRIA_SUBSTRATE.getIdentifier(), ["cnc", "nsn", "cnc"], {
    c: Item.COMPUTATION_CORE.getIdentifier(),
    n: "sgjourney:naquadah_block",
    s: Substrate.DEEP_SPACE.getIdentifier()
  });
  registerChemicalInjectionRecipe(event, {
    "chemicalType": "gas",
    "gas": "mekanism:naquadria",
    "amount": 50
  }, Substrate.NAQUADRIA.getIdentifier(), Blocks.INACTIVE_NAQUADRIA_SUBSTRATE.getIdentifier());
  // Positronic Substrate
  registerChemicalInjectionRecipe(event, {
    "chemicalType": "gas",
    "gas": "mekanism:antimatter",
    "amount": 25
  }, Substrate.POSITRONIC.getIdentifier(), Substrate.NAQUADRIA.getIdentifier());
  // Be evil and remove all the easy ae2 circuit recipes
  event.remove([{
    id: "ae2:inscriber/engineering_processor"
  }, {
    id: "ae2:inscriber/logic_processor"
  }, {
    id: "ae2:inscriber/calculation_processor"
  }, {
    id: "megacells:inscriber/accumulation_processor"
  }]);
  // Replace them with harder recipes
  registerAE2InscriberRecipeTagMiddle(event, "ae2:engineering_processor", [Tags.CIRCUIT_BASIC, "ae2:printed_engineering_processor", "ae2:printed_silicon"], true);
  registerAE2InscriberRecipeTagMiddle(event, "ae2:logic_processor", [Tags.CIRCUIT_BASIC, "ae2:printed_logic_processor", "ae2:printed_silicon"], true);
  registerAE2InscriberRecipeTagMiddle(event, "ae2:calculation_processor", [Tags.CIRCUIT_BASIC, "ae2:printed_calculation_processor", "ae2:printed_silicon"], true);
  registerAE2InscriberRecipeTagMiddle(event, "megacells:accumulation_processor", [Tags.CIRCUIT_ADVANCED, "megacells:printed_accumulation_processor", "ae2:printed_silicon"], true);
  // Make quantum bridge harder
  event.remove([{
    id: "ae2:transform/entangled_singularity"
  }, {
    id: "ae2:transform/entangled_singularity_from_pearl"
  }]);
  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "explosion"
    },
    "ingredients": [{
      "item": "ae2:singularity"
    }, {
      "tag": "forge:dusts/ender_pearl"
    }, {
      "tag": Tags.CIRCUIT_INTERMEDIATE
    }],
    "result": {
      "count": 2,
      "item": "ae2:quantum_entangled_singularity"
    }
  });
  // Pure Quartz Glass Recipe
  event.recipes.create.sequenced_assembly([Item.WASHED_SILICA_DUST.getIdentifier()], Item.SILICA_DUST.getIdentifier(), [event.recipes.createFilling(Item.INCOMPLETE_SILICA_DUST.getIdentifier(), [Fluid.toBucket("minecraft:water"), Item.INCOMPLETE_SILICA_DUST.getIdentifier()])]).transitionalItem(Item.INCOMPLETE_SILICA_DUST.getIdentifier()).loops(4);
  event.recipes.createMixing(Item.IMPURE_QUARTZ_GLASS.getIdentifier(), Item.WASHED_SILICA_DUST.getIdentifier()).heated();
  event.blasting(Item.PURE_QUARTZ_GLASS.getIdentifier(), Item.IMPURE_QUARTZ_GLASS.getIdentifier());
  // PCB Substrate recipe
  // registerAE2InscriberRecipe(event, Item.PCB_SUBSTRATE.getIdentifier(), [Item.PURE_QUARTZ_GLASS.getIdentifier(), "create:copper_sheet","create:copper_sheet"], true)
  // Phosphorus
  event.blasting({
    item: Item.PHOSPHORUS.getIdentifier(),
    count: 7
  }, Blocks.PHOSPHORITE.getIdentifier());
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
  }, "forge:phosphorus");
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
  }, "forge:dusts/blaze");
  registerItemToGas(event, {
    "amount": 1000,
    "gas": "mekanism:blaze_gas"
  }, "forge:rods/blaze");
  registerItemToGas(event, {
    "amount": 5000,
    "gas": "mekanism:blaze_gas"
  }, "forge:eggs/blaze");
  event.custom({
    "type": "mekanism:sawing",
    "input": {
      "ingredient": {
        "item": Item.SILICON_BOULE.getIdentifier()
      }
    },
    "mainOutput": {
      "count": 5,
      "item": Item.SILICON_WAFER.getIdentifier()
    }
  });
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
  event.remove({
    id: "mekanism:metallurgic_infuser"
  });
  event.shaped("mekanism:metallurgic_infuser", ["ifi", "bob", "ifi"], {
    i: "minecraft:iron_ingot",
    b: "#" + Tags.CIRCUIT_INTERMEDIATE,
    f: "minecraft:iron_ingot",
    o: "mekanism:ingot_osmium"
  });
  // Yeet the elite and basic control circuit recipes
  event.remove([{
    'id': "mekanism:control_circuit/basic"
  }, {
    "id": "mekanism:control_circuit/elite"
  }]);
  // Replace with even harder recipes :)
  registerMetallurgicInfusing(event, {
    amount: 20,
    tag: "mekanism:redstone"
  }, {
    tag: Tags.CIRCUIT_INTERMEDIATE
  }, "mekanism:basic_control_circuit");
  registerMetallurgicInfusing(event, {
    amount: 40,
    tag: "mekanism:diamond"
  }, {
    tag: Tags.CIRCUIT_ADVANCED
  }, "mekanism:elite_control_circuit");
  // Make the centrifuge easier
  event.remove({
    id: "mekanism:isotopic_centrifuge"
  });
  event.shaped("mekanism:isotopic_centrifuge", ["lll", "ctc", "lll"], {
    "c": "mekanism:elite_control_circuit",
    "l": "#forge:ingots/lead",
    "t": "mekanism:basic_chemical_tank"
  });
  // Make the combiner easier
  event.remove({
    id: "mekanism:combiner"
  });
  event.shaped("mekanism:combiner", ["aca", "sts", "aca"], {
    a: "#mekanism:alloys/reinforced",
    c: "#forge:circuits/advanced",
    t: "mekanism:steel_casing",
    s: "minecraft:cobblestone"
  });
  // Create Vacuum Tube
  event.recipes.create.pressing(Item.SILICA_DUST.getIdentifier(), "minecraft:glass");
  event.recipes.create.pressing(Item.SAND_MOLD.getIdentifier(), "minecraft:sand");
  event.recipes.create.deploying(Item.SILICA_DUST_BUCKET.getIdentifier(), ["minecraft:bucket", Item.SILICA_DUST.getIdentifier()]);
  event.recipes.create.filling(MODID + ":liquid_glass_bucket", [Fluid.toBucket(MODID + ":liquid_glass"), "minecraft:bucket"]);
  event.recipes.create.filling(Item.GLASS_TUBE.getIdentifier(), [Fluid.toBucket(MODID + ":liquid_glass"), Item.SAND_MOLD.getIdentifier()]);
  event.recipes.create.mixing([Fluid.toAmount(MODID + ":liquid_glass", 800)], [Item.SILICA_DUST.getIdentifier()]).heated();
  event.blasting(MODID + ":liquid_glass_bucket", Item.SILICA_DUST_BUCKET.getIdentifier());
  event.recipes.create.sequenced_assembly([Item.VACUUM_TUBE.getIdentifier()], Item.GLASS_TUBE.getIdentifier(), [event.recipes.createDeploying(Item.INCOMPLETE_VACUUM_TUBE.getIdentifier(), [Item.INCOMPLETE_VACUUM_TUBE.getIdentifier(), "create:iron_sheet"]), event.recipes.createDeploying(Item.INCOMPLETE_VACUUM_TUBE.getIdentifier(), [Item.INCOMPLETE_VACUUM_TUBE.getIdentifier(), "create:copper_sheet"]), event.recipes.createDeploying(Item.INCOMPLETE_VACUUM_TUBE.getIdentifier(), [Item.INCOMPLETE_VACUUM_TUBE.getIdentifier(), Item.IRON_FILAMENT.getIdentifier()])]).transitionalItem(Item.INCOMPLETE_VACUUM_TUBE.getIdentifier()).loops(3);
  event.custom({
    type: "createaddition:rolling",
    input: {
      item: "createaddition:iron_wire"
    },
    result: {
      item: Item.IRON_FILAMENT.getIdentifier(),
      count: 2
    }
  });
  // Rudimentary Processor
  // event.recipes.create.sequenced_assembly([Item.ADDER.getIdentifier()], Item.PURE_QUARTZ_GLASS.getIdentifier(), [
  //     event.recipes.createDeploying(Item.INCOMPLETE_ADDER.getIdentifier(),[Item.INCOMPLETE_ADDER.getIdentifier(),Item.VACUUM_TUBE.getIdentifier()])
  // ]).transitionalItem(Item.INCOMPLETE_ADDER.getIdentifier()).loops(8)
  // event.recipes.create.sequenced_assembly([Item.XOR.getIdentifier()], "create:iron_sheet", [
  //     event.recipes.createDeploying(Item.INCOMPLETE_XOR.getIdentifier(),[Item.INCOMPLETE_XOR.getIdentifier(),Item.VACUUM_TUBE.getIdentifier()])
  // ]).transitionalItem(Item.INCOMPLETE_XOR.getIdentifier()).loops(8)
  // event.recipes.create.sequenced_assembly([Item.RSHIFT.getIdentifier()], "create:copper_sheet", [
  //         event.recipes.createDeploying(Item.INCOMPLETE_RSHIFT.getIdentifier(),[Item.INCOMPLETE_RSHIFT.getIdentifier(),Item.VACUUM_TUBE.getIdentifier()])
  // ]).transitionalItem(Item.INCOMPLETE_RSHIFT.getIdentifier()).loops(8)
  event.recipes.create.sequenced_assembly([Item.ALU.getIdentifier()], "createaddition:electrum_sheet", [event.recipes.createDeploying(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), [Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), Item.VACUUM_TUBE.getIdentifier()]), event.recipes.createDeploying(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), [Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), Item.VACUUM_TUBE.getIdentifier()]), event.recipes.createDeploying(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), [Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), Item.VACUUM_TUBE.getIdentifier()]), event.recipes.createDeploying(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), [Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), Item.VACUUM_TUBE.getIdentifier()]), event.recipes.createDeploying(Item.INCOMPLETE_ALU.getIdentifier(), [Item.INCOMPLETE_ALU.getIdentifier(), Item.PURE_QUARTZ_GLASS.getIdentifier()])]).transitionalItem(Item.INCOMPLETE_ALU.getIdentifier()).loops(2);
  event.recipes.create.sequenced_assembly([Item.CONTROL_UNIT.getIdentifier()], "createaddition:electrum_sheet", [event.recipes.createDeploying(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), [Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), "minecraft:redstone"]), event.recipes.createDeploying(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), [Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), Item.VACUUM_TUBE.getIdentifier()]), event.recipes.createDeploying(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), [Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), Item.VACUUM_TUBE.getIdentifier()]), event.recipes.createDeploying(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), [Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), "createaddition:copper_wire"]), event.recipes.createDeploying(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), [Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), Item.VACUUM_TUBE.getIdentifier()]), event.recipes.createDeploying(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), [Item.INCOMPLETE_CONTROL_UNIT.getIdentifier(), Item.VACUUM_TUBE.getIdentifier()]), event.recipes.createDeploying(Item.INCOMPLETE_ALU.getIdentifier(), [Item.INCOMPLETE_ALU.getIdentifier(), Item.PURE_QUARTZ_GLASS.getIdentifier()])]).transitionalItem(Item.INCOMPLETE_CONTROL_UNIT.getIdentifier()).loops(3);
  // event.recipes.create.sequenced_assembly([Item.SMALL_CACHE.getIdentifier()], Item.PCB_SUBSTRATE.getIdentifier(), [
  //         event.recipes.createDeploying(Item.INCOMPLETE_SMALL_CACHE.getIdentifier(),[Item.INCOMPLETE_SMALL_CACHE.getIdentifier(),"createaddition:copper_wire"]),
  //         event.recipes.createDeploying(Item.INCOMPLETE_SMALL_CACHE.getIdentifier(),[Item.INCOMPLETE_SMALL_CACHE.getIdentifier(),Item.VACUUM_TUBE.getIdentifier()]),
  //         event.recipes.createDeploying(Item.INCOMPLETE_SMALL_CACHE.getIdentifier(),[Item.INCOMPLETE_SMALL_CACHE.getIdentifier(),Item.VACUUM_TUBE.getIdentifier()]),
  //         event.recipes.createDeploying(Item.INCOMPLETE_SMALL_CACHE.getIdentifier(),[Item.INCOMPLETE_SMALL_CACHE.getIdentifier(),Item.VACUUM_TUBE.getIdentifier()]),
  //         event.recipes.createDeploying(Item.INCOMPLETE_SMALL_CACHE.getIdentifier(),[Item.INCOMPLETE_SMALL_CACHE.getIdentifier(),Item.VACUUM_TUBE.getIdentifier()]),
  // ]).transitionalItem(Item.INCOMPLETE_SMALL_CACHE.getIdentifier()).loops(2)
  registerAE2InscriberRecipe(event, Item.RUDIMENTARY_PROCESSOR.getIdentifier(), ["createaddition:electrum_sheet", Item.CONTROL_UNIT.getIdentifier(), Item.ALU.getIdentifier()], true);
  // Ad Astra
  event.shaped(Item.of(Item.RCU, 1), ["SSS", "CCC", "RRR"], {
    S: "#forge:storage_blocks/steel",
    C: "#" + Tags.CIRCUIT_INTERMEDIATE,
    R: "ad_astra:iron_rod"
  });
  // Remove easy rocket engines
  event.remove("ad_astra:recipes/steel_engine");
  event.remove("ad_astra:recipes/desh_engine");
  event.remove("ad_astra:recipes/ostrum_engine");
  event.remove("ad_astra:recipes/calorite_engine");
  // Add hard engines
  event.shaped(Item.of("ad_astra:steel_engine", 1), ["SSS", "ECE", " F "], {
    S: "#forge:plates/steel",
    C: Item.RCU.getIdentifier(),
    E: "ad_astra:engine_frame",
    F: "ad_astra:engine_fan"
  });
  event.shaped(Item.of("ad_astra:desh_engine", 1), ["SSS", "ECE", " F "], {
    S: "#forge:plates/desh",
    C: Item.RCU.getIdentifier(),
    E: "ad_astra:engine_frame",
    F: "ad_astra:engine_fan"
  });
  event.shaped(Item.of("ad_astra:ostrum_engine", 1), ["SSS", "ECE", " F "], {
    S: "#forge:plates/ostrum",
    C: Item.RCU.getIdentifier(),
    E: "ad_astra:engine_frame",
    F: "ad_astra:engine_fan"
  });
  event.shaped(Item.of("ad_astra:calorite_engine", 1), ["SSS", "ECE", " F "], {
    S: "#forge:plates/calorite",
    C: Item.RCU.getIdentifier(),
    E: "ad_astra:engine_frame",
    F: "ad_astra:engine_fan"
  });
  // Computercraft
  event.remove([{
    id: "computercraft:computer_normal"
  }, {
    id: "computercraft:computer_advanced"
  }, {
    id: "computercraft:pocket_computer_normal"
  }, {
    id: "computercraft:pocket_computer_advanced"
  }]);
  event.shaped("computercraft:computer_normal", ["sss", "scs", "sgs"], {
    "s": "#balm:stones",
    "c": "#" + Tags.CIRCUIT_INTERMEDIATE,
    "g": "#forge:glass_panes"
  });
  event.shaped("computercraft:computer_advanced", ["sss", "scs", "sgs"], {
    "s": "minecraft:gold_ingot",
    "c": "#" + Tags.CIRCUIT_INTERMEDIATE,
    "g": "#forge:glass_panes"
  });
  event.shaped("computercraft:pocket_computer_normal", ["scs", "sas", "sgs"], {
    "s": "#balm:stones",
    "a": "minecraft:golden_apple",
    "c": "#" + Tags.CIRCUIT_INTERMEDIATE,
    "g": "#forge:glass_panes"
  });
  event.shaped("computercraft:pocket_computer_advanced", ["scs", "sas", "sgs"], {
    "s": "minecraft:gold_ingot",
    "a": "minecraft:golden_apple",
    "c": "#" + Tags.CIRCUIT_INTERMEDIATE,
    "g": "#forge:glass_panes"
  });
  // AE2WTLIB
  event.remove({
    id: "ae2wtlib:quantum_bridge_card"
  });
  // SgJourney
  event.remove({
    id: "sgjourney:basic_interface"
  });
  event.remove({
    id: "sgjourney:reaction_chamber"
  });
  event.shaped("sgjourney:reaction_chamber", ["cnc", "nbn", "cnc"], {
    "c": "#" + Tags.CIRCUIT_INTERMEDIATE,
    "n": "sgjourney:naquadah_alloy",
    "b": "minecraft:blaze_powder"
  });
  event.shaped("sgjourney:basic_interface", ["gii", "cuu", "gii"], {
    "c": "#" + Tags.CIRCUIT_INTERMEDIATE,
    "i": "minecraft:iron_ingot",
    "g": "minecraft:gold_ingot",
    "u": "minecraft:copper_ingot"
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
        tag: "forge:ores/borax"
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
  // photomask
  event.shaped(Item.IC_PHOTOMASK.getIdentifier(), ["ek ", "   ", "   "], {
    e: Item.PURE_QUARTZ_GLASS.getIdentifier(),
    k: "#ae2:knife"
  }).noMirror().noShrink();
  event.shaped(Item.EP_PHOTOMASK.getIdentifier(), [" k ", " e ", "   "], {
    e: Item.PURE_QUARTZ_GLASS.getIdentifier(),
    k: "#ae2:knife"
  }).noMirror().noShrink();
  event.shaped(Item.ISO_PHOTOMASK.getIdentifier(), [" ke", "   ", "   "], {
    e: Item.PURE_QUARTZ_GLASS.getIdentifier(),
    k: "#ae2:knife"
  }).noMirror().noShrink();
  // Rebalance mekanism recipes to be easier (woah how nice of me)
  event.remove({
    id: "mekanism:chemical_injection_chamber"
  });
  event.shaped("mekanism:chemical_injection_chamber", ["cac", "gpg", "cac"], {
    c: "mekanism:advanced_control_circuit",
    a: "mekanism:alloy_reinforced",
    g: "minecraft:gold_ingot",
    p: "mekanism:purification_chamber"
  });
  event.remove({
    id: "mekanism:chemical_crystallizer"
  });
  event.shaped("mekanism:chemical_crystallizer", ["ofo", "csc", "ofo"], {
    "f": "#forge:gems/fluorite",
    "c": "mekanism:advanced_control_circuit",
    "o": {
      "tag": "forge:ingots/refined_obsidian"
    },
    "s": "mekanism:steel_casing"
  });
  event.remove({
    id: "mekanism:chemical_dissolution_chamber"
  });
  event.shaped("mekanism:chemical_dissolution_chamber", ["ctc", "asa", "ctc"], {
    c: "mekanism:advanced_control_circuit",
    a: "#forge:ingots/refined_obsidian",
    t: "mekanism:basic_chemical_tank",
    s: "mekanism:steel_casing"
  });
  // AE2 Infinity Booster
  event.remove({
    id: "aeinfinitybooster:infinity_card"
  });
  event.shaped("aeinfinitybooster:infinity_card", ["ece", "csc", "nnn"], {
    e: "minecraft:ender_eye",
    c: "#" + Tags.CIRCUIT_INTERMEDIATE,
    s: "minecraft:nether_star",
    n: "minecraft:netherite_ingot"
  });
  event.remove({
    id: "aeinfinitybooster:dimension_card"
  });
  event.shaped("aeinfinitybooster:dimension_card", ["isi", "scs", "isi"], {
    c: "#" + Tags.CIRCUIT_ADVANCED,
    s: "minecraft:nether_star",
    i: "aeinfinitybooster:infinity_card"
  });
  //====Edible Processor====\\
  // Wafer recipe
  new MultistepProcess().addStep(new CreateMixingStep("Cream Butter and Sugar", {
    input: ["#forge:sugar", "#forge:butter"]
  })).addStep(new CreateMixingStep("Add Eggs and Vanilla", {
    input: [MultistepProcess.INTERMEDIATE_ITEM, {
      tag: "forge:egg",
      amount: 2
    }, "pamhc2foodextended:vanillaitem"]
  })).addStep(new CreateMixingStep("Mix in some flour", {
    input: [MultistepProcess.INTERMEDIATE_ITEM, {
      tag: "forge:flour",
      amount: 1
    }]
  })).addStep(new CreateMixingStep("Mix in some more flour", {
    input: [MultistepProcess.INTERMEDIATE_ITEM, {
      tag: "forge:flour",
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
    input: [MultistepProcess.INTERMEDIATE_ITEM, "#forge:sugar"]
  })).addStep(new MinecraftSmokingStep("Caramelize Sugar", {
    output: Item.EDIBLE_PROCESSOR_WAFER
  })).usingItem(Item.INCOMPLETE_EDIBLE_PROCESSOR_WAFER.getIdentifier()).register(event);
  // Chips
  event.custom({
    type: "create:cutting",
    ingredients: [{
      item: Item.EDIBLE_PROCESSOR_WAFER.getIdentifier()
    }],
    processingTime: 50,
    results: [{
      item: Item.EDIBLE_PROCESSOR_CHIP.getIdentifier(),
      amount: 4
    }]
  });
  // Processors
  registerAE2InscriberRecipe(event, Item.EDIBLE_PROCESSOR.getIdentifier(), [Item.EDIBLE_PROCESSOR_CHIP.getIdentifier(), "create:bar_of_chocolate", "create:bar_of_chocolate"], true);
  // Baking Soda
  event.custom({
    type: "minecraft:smoking",
    cookingtime: 100,
    experience: 1.0,
    ingredient: {
      item: "minecraft:dried_kelp"
    },
    result: Item.KELP_ASH.getIdentifier()
  });
  event.custom({
    "type": "create:splashing",
    "ingredients": [{
      "item": Item.KELP_ASH.getIdentifier()
    }],
    "results": [{
      "item": Item.SODIUM_BICARBONATE.getIdentifier()
    }]
  });
  //====Computation Core====\\
  event.recipes.create.mechanical_crafting(Item.COMPUTATION_CORE.getIdentifier(), [
    //spell-checker: disable
    "ussse", "svvvs", "svnvs", "svvvs", "esssu"], {
    //spell-checker: enable
    s: "ae2:cell_component_4k",
    v: Item.INTEGRATED_CIRCUIT.getIdentifier(),
    u: Item.ISOTOPIC_DECAY_OSCILLATOR.getIdentifier(),
    e: Item.EDIBLE_PROCESSOR.getIdentifier(),
    n: Item.COMPUTATION_CORE_FRAME.getIdentifier()
  });
  event.shaped(Item.COMPUTATION_CORE_FRAME.getIdentifier(), ["nnn", "n n", "nnn"], {
    n: "sgjourney:naquadah_alloy"
  });

  //====RAM Stick====\\
  // new MultistepProcess()
  //     // Oxide layer
  //     .addStep(new MekanismCombiningStep("Combine Wafer with Phantom Membrane", {inputItem: Item.SILICON_WAFER.getIdentifier(), extraItem: "minecraft:phantom_membrane"}))
  //     .addStep(new MekanismInjectingStep("Inject Water Vapor",{"amount": 10,"tag": "mekanism:water_vapor"}))
  //     .addStep(new MekanismInjectingStep("Apply Photoresist",{"amount": 5,"gas": "mekanism:photoresist"}))
  //     .addStep(new Ae2InscribingStep("Expose Photoresist", {top: Item.RAM_PHOTOMASK.getIdentifier()}))
  //     .addStep(new MekanismInjectingStep("Etch Wafer", {"amount": 2,"gas": "mekanism:hydrofluoric_acid"}))
  //     //nWell
  //     .addStep(new MekanismInjectingStep("Apply Photoresist",{"amount": 5,"gas": "mekanism:photoresist"}))
  //     .addStep(new Ae2InscribingStep("Expose Photoresist", {top: Item.RAM_PHOTOMASK.getIdentifier()}))
  //     .addStep(new MekanismInjectingStep("Inject Phosphorus",{"amount": 2,"gas": "mekanism:phosphorus"}))
  //     //nMOS
  //     .addStep(new MekanismInjectingStep("Apply Photoresist",{"amount": 5,"gas": "mekanism:photoresist"}))
  //     .addStep(new Ae2InscribingStep("Expose Photoresist", {top: Item.RAM_PHOTOMASK.getIdentifier()}))
  //     .addStep(new MekanismInjectingStep("Etch Wafer", {"amount": 2,"gas": "mekanism:hydrofluoric_acid"}))
  //     //grow oxide (idk a good way to represent this step so ima leave it out)
  //     // polysilicon
  //     .addStep(new MekanismInjectingStep("Inject Silicon",{"amount": 5,"gas": "mekanism:silicon"}))
  //     .addStep(new MekanismInjectingStep("Apply Photoresist",{"amount": 5,"gas": "mekanism:photoresist"}))
  //     .addStep(new Ae2InscribingStep("Expose Photoresist", {top: Item.RAM_PHOTOMASK.getIdentifier()}))
  //     .addStep(new MekanismInjectingStep("Etch Wafer", {"amount": 2,"gas": "mekanism:hydrofluoric_acid"}))
  //     // p-type implantation
  //     .addStep(new MekanismInjectingStep("Apply Photoresist",{"amount": 5,"gas": "mekanism:photoresist"}))
  //     .addStep(new Ae2InscribingStep("Expose Photoresist", {top: Item.RAM_PHOTOMASK.getIdentifier()}))
  //     .addStep(new MekanismInjectingStep("Inject Boron",{"amount": 2,"gas": "mekanism:boron_trifluoride"}))
  //     // n-type implantation
  //     .addStep(new MekanismInjectingStep("Apply Photoresist",{"amount": 5,"gas": "mekanism:photoresist"}))
  //     .addStep(new Ae2InscribingStep("Expose Photoresist", {top: Item.RAM_PHOTOMASK.getIdentifier()}))
  //     .addStep(new MekanismInjectingStep("Inject Phosphorus",{"amount": 2,"gas": "mekanism:phosphorus"},MultistepProcess.INTERMEDIATE_ITEM,Item.RAM_MODULE_WAFER.getIdentifier()))

  //     .usingItem(Item.INCOMPLETE_RAM_MODULE_WAFER.getIdentifier())
  //     .register(event)
  //     event.custom({
  //         "type": "mekanism:sawing",
  //         "input": {
  //           "ingredient": {
  //             "item": Item.RAM_MODULE_WAFER.getIdentifier()
  //           }
  //         },
  //         "mainOutput": {
  //           "count": 6,
  //           "item": Item.RAM_MODULE_CHIP.getIdentifier()
  //         }
  //       })
  //     registerAE2InscriberRecipe(event, Item.RAM_MODULE.getIdentifier(), [Item.RAM_MODULE_CHIP.getIdentifier(), Item.PURE_QUARTZ_GLASS.getIdentifier(), Item.ADVANCED_PCB_SUBSTRATE.getIdentifier()])
  //     registerMetallurgicInfusing(event, {amount:40, tag: "mekanism:gold"}, Item.ADVANCED_PCB_SUBSTRATE.getIdentifier(), Item.RAM_PCB.getIdentifier())
  //     event.custom({
  //       "type": "mekanism:combining",
  //       "extraInput": {
  //         "amount": 8,
  //         "ingredient": {
  //           "item": Item.RAM_MODULE.getIdentifier()
  //         }
  //       },
  //       "mainInput": {
  //         "ingredient": {
  //           "item": Item.RAM_PCB.getIdentifier()
  //         }
  //       },
  //       "output": {
  //         "count": 1,
  //         "item": Item.RAM_STICK.getIdentifier()
  //       }
  //     })
  //====Radioactive thingy====\\
  event.custom({
    "type": "mekanism:sawing",
    "input": {
      "ingredient": {
        "item": "mekanism:block_uranium"
      }
    },
    "mainOutput": {
      "count": 4,
      "item": Item.URANIUM_WAFER.getIdentifier()
    }
  });
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
  event.custom({
    "type": "mekanism:sawing",
    "input": {
      "ingredient": {
        "item": Item.ISOTOPIC_DECAY_OSCILLATOR_WAFER.getIdentifier()
      }
    },
    "mainOutput": {
      "count": 3,
      "item": Item.ISOTOPIC_DECAY_OSCILLATOR_CHIP.getIdentifier()
    }
  });
  registerAE2InscriberRecipe(event, Item.ISOTOPIC_DECAY_OSCILLATOR.getIdentifier(), [Item.ISOTOPIC_DECAY_OSCILLATOR_CHIP.getIdentifier(), "mekanism:block_lead", Item.ADVANCED_PCB_SUBSTRATE.getIdentifier()], true);
  // Mob Grinding Utils
  event.remove([{
    id: "mob_grinding_utils:recipe_saw"
  }, {
    id: "mob_grinding_utils:recipe_absorbtion_hopper"
  }]);
  event.shaped("mob_grinding_utils:saw", ["sds", "pcp", "dcd"], {
    s: "minecraft:iron_sword",
    d: "minecraft:diamond",
    c: "#" + Tags.CIRCUIT_INTERMEDIATE,
    p: "mob_grinding_utils:spikes"
  });
  event.shaped("mob_grinding_utils:absorption_hopper", [" e ", "ioi", "oho"], {
    e: "minecraft:ender_eye",
    i: "#" + Tags.CIRCUIT_INTERMEDIATE,
    o: "minecraft:obsidian",
    h: "minecraft:hopper"
  });
  // BoP
  event.custom({
    "type": "create:sandpaper_polishing",
    "ingredients": [{
      "item": "biomesoplenty:rose_quartz_chunk"
    }],
    "results": [{
      "item": "create:polished_rose_quartz"
    }]
  });
  event.recipes.create.mixing([KItem.of("biomesoplenty:white_sand", 8)], [Ingredient.of("minecraft:sand", 8), Ingredient.of("#balm:white_dyes", 1)]);
  event.recipes.create.mixing([KItem.of("biomesoplenty:black_sand", 8)], [Ingredient.of("minecraft:sand", 8), Ingredient.of("#balm:black_dyes", 1)]);
  event.recipes.create.mixing([KItem.of("biomesoplenty:orange_sand", 8)], [Ingredient.of("minecraft:sand", 8), Ingredient.of("#balm:orange_dyes", 1)]);
  // COMPOSTS
  event.shaped(Blocks.COMPOST_MULCH.getIdentifier(), ["ded", "mfb", "dsd"], {
    d: "#minecraft:dirt",
    e: Ingredient.of(["biomesoplenty:hellbark_sapling", "biomesoplenty:umbran_sapling"]),
    m: Ingredient.of(["biomesoplenty:magic_sapling", "biomesoplenty:rainbow_birch_sapling"]),
    b: Ingredient.of(["minecraft:jungle_sapling", "biomesoplenty:fir_sapling", "biomesoplenty:redwood_sapling"]),
    f: Ingredient.of(["biomesoplenty:willow_sapling", "biomesoplenty:dead_sapling", "biomesoplenty:palm_sapling"]),
    s: Ingredient.of(["biomesoplenty:flowering_oak_sapling", "biomesoplenty:yellow_autumn_sapling", "biomesoplenty:orange_autumn_sapling"])
  });
  event.shaped(Blocks.COMPOST_ORGANIC.getIdentifier(), ['gfp', 'ddd', 'lcm'], {
    d: "#minecraft:dirt",
    g: "#forge:grain",
    f: "#forge:fruits",
    p: "#forge:paper_plants",
    l: "#forge:leafyvegetables",
    c: Ingredient.of(["#forge:cactus_plants", "minecraft:cactus"]),
    m: "#forge:mushrooms"
  });
  event.shaped(Blocks.COMPOST_CORAL.getIdentifier(), ['bsa', 'sss', 'psi'], {
    s: "minecraft:sand",
    b: Ingredient.of(["minecraft:tube_coral_block", "minecraft:bubble_coral_block", "minecraft:brain_coral_block"]),
    i: Ingredient.of(["minecraft:tube_coral", "minecraft:bubble_coral", "minecraft:brain_coral"]),
    p: Ingredient.of(["minecraft:fire_coral_block", "minecraft:horn_coral_block"]),
    a: Ingredient.of(["minecraft:fire_coral", "minecraft:horn_coral"])
  });
  event.shaped(Blocks.COMPOST_FLORAL.getIdentifier(), ["roy", "mmm", "gbp"], {
    m: "minecraft:moss_block",
    r: Ingredient.of(["minecraft:poppy", "minecraft:rose_bush", "minecraft:red_tulip", "biomesoplenty:waterlily", "biomesoplenty:rose"]),
    o: Ingredient.of(["minecraft:orange_tulip", "biomesoplenty:orange_cosmos", "biomesoplenty:burning_blossom", "minecraft:torchflower"]),
    y: Ingredient.of(["minecraft:dandelion", "minecraft:sunflower", "biomesoplenty:goldenrod"]),
    g: Ingredient.of(["minecraft:grass", "minecraft:fern"]),
    b: Ingredient.of(["minecraft:cornflower", "biomesoplenty:blue_hydrangea", "biomesoplenty:icy_iris", "minecraft:blue_orchid"]),
    p: Ingredient.of(["biomesoplenty:lavender", "biomesoplenty:tall_lavender", "biomesoplenty:violet", "biomesoplenty:wildflower", "minecraft:lilac", "minecraft:allium"])
  });
  // Electrum
  event.recipes.create.mixing({
    item: "createaddition:electrum_ingot",
    count: 3
  }, ["minecraft:copper_ingot", "minecraft:gold_ingot", "minecraft:iron_ingot"]).heated();
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
    "r": "#forge:storage_blocks/redstone",
    "e": "#forge:ingots/iron"
  });
  // Phosphorus
  registerChemicalInjectionRecipe(event, {
    chemicalType: "gas",
    gas: "mekanism:sulfuric_acid",
    amount: 2
  }, Item.PHOSPHORUS.getIdentifier(), "mekanism:bio_fuel");
});
