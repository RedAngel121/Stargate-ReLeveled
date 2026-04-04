// priority: 0
console.info("Loading Creative Tab")

StartupEvents.modifyCreativeTab("kubejs:tab", event => {
    event.setDisplayName("Stargate: ReLeveled");
    event.setIcon("sgcommunity_pack:integrated_circuit");
});
