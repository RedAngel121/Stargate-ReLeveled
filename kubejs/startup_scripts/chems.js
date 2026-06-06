// priority: 0
console.info("Loading Chemicals")

StartupEvents.registry("mekanism:chemical", chem => {

    chem.create("sgcommunity_pack:blaze_gas")
        .displayName("Blaze Gas")
        .tint(0xF18A22)

    chem.create("sgcommunity_pack:phosphorus")
        .displayName("Phosphorus Gas")
        .tint(0xFFFFDD)

    chem.create("sgcommunity_pack:silicon")
        .displayName("Molten Silicon")
        .tint(0xEECCCC)

    chem.create("sgcommunity_pack:doped_silicon")
        .displayName("Doped Molten Silicon")
        .tint(0xFFCCDD)

    chem.create("sgcommunity_pack:photoresist")
        .displayName("Photoresist")
        .tint(0xFF643C)

    chem.create("sgcommunity_pack:boron_trifluoride")
        .displayName("Boron Trifluoride")
        .tint(0xFFFFFF)

    chem.create("sgcommunity_pack:boron_trioxide")
        .displayName("Boron Trioxide")
        .tint(0xFFFFFF)

    chem.create("sgcommunity_pack:tree_sap")
        .displayName("Tree Sap")
        .tint(0xc06000)

    chem.create("sgcommunity_pack:naquadria")
        .displayName("Naquadria")
        .tint(0x444444)

})
