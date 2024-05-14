ServerEvents.recipes(event => {
  // rftools base
  event.remove([{
    id: "rftoolsbase:machine_frame"
  }, {
    id: "rftoolsbase:machine_base"
  }, {
    id: "rftoolsbase:machine_infuser"
  }]);
  event.shaped("rftoolsbase:machine_frame", ["ici", "g g", "ici"], {
    i: "minecraft:iron_ingot",
    g: "minecraft:gold_nugget",
    c: "#" + Tags.CIRCUIT_INTERMEDIATE
  });
  event.shaped("rftoolsbase:machine_base", ["ccc", "sss"], {
    c: "#" + Tags.CIRCUIT_BASIC,
    s: "#bookshelf:stones"
  });
  event.shaped("rftoolsbase:machine_infuser", ["dcd", "gfg", "dcd"], {
    d: "rftoolsbase:dimensionalshard",
    c: "#" + Tags.CIRCUIT_ADVANCED,
    g: "minecraft:diamond",
    f: "rftoolsbase:machine_frame"
  });
  //rftools builder
  event.remove([{
    id: "rftoolsbuilder:builder"
  }, {
    id: "rftoolsbuilder:shield_block1"
  }, {
    id: "rftoolsbuilder:shield_block2"
  }, {
    id: "rftoolsbuilder:shield_block3"
  }, {
    id: "rftoolsbuilder:shield_block4"
  }]);
  event.shaped("rftoolsbuilder:builder", ["beb", "cfc", "bcb"], {
    b: "minecraft:bricks",
    e: "minecraft:ender_pearl",
    c: "#" + Tags.CIRCUIT_ADVANCED,
    f: "rftoolsbase:machine_frame"
  });
  event.shaped("rftoolsbuilder:shield_block1", ["gtg", "cfc", "ooo"], {
    g: "minecraft:gold_ingot",
    t: "minecraft:redstone_torch",
    f: "rftoolsbase:machine_frame",
    c: "#" + Tags.CIRCUIT_ADVANCED,
    o: "minecraft:obsidian"
  });
  event.shaped("rftoolsbuilder:shield_block2", ["pop", "fof", "pop"], {
    f: "rftoolsbuilder:shield_block1",
    o: "minecraft:obsidian",
    p: "mekanism:pellet_plutonium"
  });
  event.shaped("rftoolsbuilder:shield_block3", ["dod", "faf", "dod"], {
    f: "rftoolsbuilder:shield_block2",
    o: "minecraft:obsidian",
    a: "mekanism:pellet_antimatter",
    d: "rftoolsbase:dimensionalshard"
  });
  event.shaped("rftoolsbuilder:shield_block4", ["nan", "fof", "nan"], {
    f: "rftoolsbuilder:shield_block3",
    o: "minecraft:obsidian",
    a: "mekanism:pellet_antimatter",
    n: "minecraft:nether_star"
  });
  //rftools utility
  //remove teleportation
  event.remove([{
    id: "rftoolsutility:simple_dialer"
  }, {
    id: "rftoolsutility:matter_receiver"
  }, {
    id: "rftoolsutility:destination_analyzer"
  }, {
    id: "rftoolsutility:matter_booster"
  }, {
    id: "rftoolsutility:matter_booster"
  }, {
    id: "rftoolsutility:charged_porter"
  }, {
    id: "rftoolsutility:advanced_charged_porter"
  }]);
  //balance
  event.remove([{
    id: "rftoolsutility:spawner"
  }, {
    id: "rftoolsutility:environmental_controller"
  }]);
  event.shaped("rftoolsutility:spawner", ["cfc", "etr", "cbc"], {
    c: "#" + Tags.CIRCUIT_INTERMEDIATE,
    f: "minecraft:rotten_flesh",
    e: "minecraft:ender_pearl",
    t: "rftoolsbase:machine_frame",
    r: "minecraft:blaze_rod",
    b: "minecraft:bone"
  });
  event.shaped("rftoolsutility:environmental_controller", ["cdc", "gfi", "cec"], {
    c: "#" + Tags.CIRCUIT_INTERMEDIATE,
    d: "minecraft:diamond_block",
    g: "minecraft:gold_block",
    f: "rftoolsbase:machine_frame",
    i: "minecraft:iron_block",
    e: "minecraft:emerald_block"
  });
  //rftools dim
  event.remove([{
    id: "rftoolsdim:dimension_builder"
  }, {
    id: "rftoolsdim:dimension_editor"
  }, {
    id: "rftoolsdim:phased_field_generator"
  }]);
  event.shaped("rftoolsdim:dimension_builder", ["ece", "cbc", "ggg"], {
    e: "minecraft:ender_pearl",
    c: "#" + Tags.CIRCUIT_ADVANCED,
    b: "rftoolsbase:machine_frame",
    g: "minecraft:gold_ingot"
  });
  event.shaped("rftoolsdim:dimension_editor", ["ece", "cbc", "iii"], {
    e: "minecraft:ender_pearl",
    c: "#" + Tags.CIRCUIT_ADVANCED,
    b: "rftoolsbase:machine_frame",
    i: "minecraft:iron_ingot"
  });
  event.shaped("rftoolsdim:phased_field_generator", ["cdc", "ded", "cdc"], {
    c: "mekanism:pellet_antimatter",
    d: "rftoolsbase:dimensionalshard",
    e: "minecraft:ender_eye"
  });
});
