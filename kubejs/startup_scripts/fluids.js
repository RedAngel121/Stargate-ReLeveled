// priority: 0
console.info("Loading Fluids")
StartupEvents.registry("fluid", event => {

    event.create("sgcommunity_pack:molten_glass", "thick")
        .displayName("Molten Glass")
        .tint(0xFFCCCC);

});
