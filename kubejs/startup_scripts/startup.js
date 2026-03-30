// priority: 0
// Visit the wiki for more info - https://kubejs.com/

console.info("Loading Startup Scripts");


// ---= EVERYTHING BELOW THIS NEEDS TO BE EVALUATED =---
// Register substrates
StartupEvents.registry("block", event => {
    for (let key in Substrate) {
        var _substrate$builderOpt, _substrate$builderOpt2;
        let substrate = Substrate[key];
        event.create(substrate.getIdentifier()) // Create a new block
            .displayName(substrate.getName()) // Set a custom name
            .mapColor("metal") // Set a material (affects the sounds and some properties)
            .soundType("metal")
            .hardness(1.0) // Set hardness (affects mining time)
            .resistance(1.0) // Set resistance (to explosions, etc)
            .lightLevel((_substrate$builderOpt = substrate.builderOptions.lightLevel) !== null && _substrate$builderOpt !== void 0 ? _substrate$builderOpt : 0).renderType((_substrate$builderOpt2 = substrate.builderOptions.renderType) !== null && _substrate$builderOpt2 !== void 0 ? _substrate$builderOpt2 : "SOLID").tagBoth(MODID + "substrates") // Tag the block and item
            .requiresTool(true) // Requires a tool or it won"t drop (see tags below)
            .tagBlock("mineable/pickaxe") // or a pickaxe
            .tagBlock("minecraft:needs_iron_tool"); // the tool tier must be at least iron
    }
    for (let block of Object.values(Blocks)) {
        let builder = event.create(block.getIdentifier()).displayName(block.getDisplayName()).mapColor(block.getMapColor()).soundType(block.getSoundType()).hardness(block.getHardness()).resistance(block.getBlastResistance()).lightLevel(block.getLightLevel()).requiresTool(block.getRequiresTool());
        for (let tag of block.getBlockTags()) {
            builder.tagBlock(tag);
        }
        for (let tag of block.getItemTags()) {
            builder.tagItem(tag);
        }
    }
});

StartupEvents.registry("item", event => {
    for (let e in Item) {
        let item = Item[e];
        let builder;
        if (item.builderOptions.itemType) {
            builder = event.create(item.getIdentifier(), item.builderOptions.itemType);
        } else {
            builder = event.create(item.getIdentifier());
        }
        for (let tag of item.builderOptions.tags) {
            builder.tag(tag);
        }
        if (item.builderOptions.use) {
            builder.use(item.builderOptions.use);
        }
        item.builderOptions.texture ? builder.texture(item.builderOptions.texture) : undefined;
        item.builderOptions.food ? builder.food(item.builderOptions.food) : undefined;
        item.builderOptions.stackSize ? builder.maxStackSize(item.builderOptions.stackSize) : undefined;
        builder.displayName(item.getName());
    }
});

StartupEvents.registry("fluid", event => {
    event.create("sgcommunity_pack:molten_glass", "thick").displayName("Molten Glass").tint(0xFFCCCC);
});

// // Mekanism Chemical Registration
StartupEvents.registry("mekanism:chemical", event => {

    event.create("mekanism:blaze_gas")
        .displayName("Blaze Gas")
        .tint(0xF18A22);

    event.create("mekanism:phosphorus")
        .displayName("Phosphorus Gas")
        .tint(0xFFFFDD);

    event.create("mekanism:silicon")
        .displayName("Molten Silicon")
        .tint(0xEECCCC);

    event.create("mekanism:doped_silicon")
        .displayName("Doped Molten Silicon")
        .tint(0xFFCCDD);

    event.create("mekanism:photoresist")
        .displayName("Photoresist")
        .tint(0xFF643C);

    event.create("mekanism:boron_trifluoride")
        .displayName("Boron Trifluoride")
        .tint(0xFFFFFF);

    event.create("mekanism:boron_trioxide")
        .displayName("Boron Trioxide")
        .tint(0xFFFFFF);

    event.create("mekanism:tree_sap")
        .displayName("Tree Sap")
        .tint(0xc06000);

    event.create("mekanism:naquadria")
        .displayName("Naquadria")
        .tint(0x444444);

});

StartupEvents.modifyCreativeTab("kubejs:tab", event => {
    event.setDisplayName("Stargate: ReLeveled");
    event.setIcon(Item.INTEGRATED_CIRCUIT.getIdentifier());
});

console.info("Loaded Startup Scripts");
