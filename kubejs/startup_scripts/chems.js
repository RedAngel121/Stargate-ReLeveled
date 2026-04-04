// priority: 0
console.info("Loading Chemicals")

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
