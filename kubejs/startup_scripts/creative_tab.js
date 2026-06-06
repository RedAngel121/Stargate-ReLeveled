// priority: -1
console.info("Loading Creative Tab")
Platform.setModName("sgcommunity_pack", "SGCommunity Pack")
StartupEvents.modifyCreativeTab("kubejs:tab", event => {
    event.setDisplayName("SGCommunity Pack");
    event.setIcon("sgcommunity_pack:integrated_circuit");
});
