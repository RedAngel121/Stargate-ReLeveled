// priority: 0
console.info("Loading Blocks")

StartupEvents.registry("block", event => {

    const substrates = [
        { id: "iron_substrate", name: "Iron Substrate" },
        { id: "gold_substrate", name: "Gold Substrate" },
        { id: "diamond_substrate", name: "Diamond Substrate" },
        { id: "netherite_substrate", name: "Netherite Substrate" },
        { id: "kinetic_substrate", name: "Kinetic Substrate" },
        { id: "computational_substrate", name: "Computational Substrate", light: 0.5 },
        { id: "mekanised_substrate", name: "Mekanised Substrate" },
        { id: "reactive_substrate", name: "Reactive Substrate" },
        { id: "deep_space_substrate", name: "Deep Space Substrate" },
        { id: "naquadria_substrate", name: "Naquadria Substrate", light: 1 },
        { id: "positronic_substrate", name: "Positronic Substrate", light: 1 }
    ]

    substrates.forEach(s => {
        event.create(`sgcommunity_pack:${s.id}`)
            .displayName(s.name)
            .mapColor("metal")
            .soundType("metal")
            .hardness(1)
            .resistance(1)
            .lightLevel(s.light ?? 0)
            .tagBoth(`sgcommunity_pack:substrates`)
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("minecraft:needs_iron_tool")
    })

    const blocks = [
        {
            id: "phosphorite",
            name: "Phosphorite",
            mapColor: "stone",
            sound: "stone",
            hardness: 1.5,
            resistance: 1.5,
            tool: "pickaxe",
            tier: "minecraft:needs_iron_tool",
            tags: ["c:ores", "c:ores/phosphorus"]
        },
        {
            id: "borax",
            name: "Borax",
            mapColor: "stone",
            sound: "stone",
            hardness: 1.5,
            resistance: 1.5,
            tool: "pickaxe",
            tier: "minecraft:needs_iron_tool",
            tags: ["c:ores", "c:ores/borax"]
        },
        {
            id: "floral_compost",
            name: "Floral Compost",
            mapColor: "dirt",
            sound: "gravel",
            hardness: 0.6,
            resistance: 0.6,
            tool: "shovel"
        },
        {
            id: "mulch_compost",
            name: "Mulch",
            mapColor: "dirt",
            sound: "gravel",
            hardness: 0.6,
            resistance: 0.6,
            tool: "shovel"
        },
        {
            id: "organic_compost",
            name: "Organic Compost",
            mapColor: "dirt",
            sound: "gravel",
            hardness: 0.6,
            resistance: 0.6,
            tool: "shovel"
        },
        {
            id: "coral_compost",
            name: "Coral Compost",
            mapColor: "dirt",
            sound: "stone",
            hardness: 0.8,
            resistance: 0.8,
            tool: "pickaxe"
        },
        {
            id: "inactive_naquadria_substrate",
            name: "Inactive Naquadria Substrate",
            mapColor: "metal",
            sound: "metal",
            hardness: 2,
            resistance: 10,
            tool: "pickaxe",
            tier: "minecraft:needs_iron_tool"
        }
    ]

    blocks.forEach(b => {
        let builder = event.create(`sgcommunity_pack:${b.id}`)
            .displayName(b.name)
            .mapColor(b.mapColor ?? "stone")
            .soundType(b.sound ?? "stone")
            .hardness(b.hardness ?? 1)
            .resistance(b.resistance ?? 1)
            .lightLevel(b.light ?? 0)

        if (b.tool) {
            builder.requiresTool(true)
            builder.tagBlock(`minecraft:mineable/${b.tool}`)
        }

        if (b.tier) {
            builder.tagBlock(b.tier)
        }

        if (b.tags) {
            b.tags.forEach(tag => builder.tagBoth(tag))
        }
    })

})
