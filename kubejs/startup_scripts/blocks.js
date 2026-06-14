// priority: 0
console.info("Loading Blocks")
StartupEvents.registry("block", event => {
    const cruxes = [
        { id: "iron_crux", name: "Iron Crux" },
        { id: "gold_crux", name: "Gold Crux" },
        { id: "diamond_crux", name: "Diamond Crux" },
        { id: "netherite_crux", name: "Netherite Crux" },
        { id: "kinetic_crux", name: "Kinetic Crux" },
        { id: "computational_crux", name: "Computational Crux", light: 0.5 },
        { id: "mekanised_crux", name: "Mekanised Crux" },
        { id: "reactive_crux", name: "Reactive Crux" },
        { id: "deep_space_crux", name: "Deep Space Crux" },
        { id: "naquadria_crux", name: "Naquadria Crux", light: 1 },
        { id: "positronic_crux", name: "Positronic Crux", light: 1 }
    ]
    
    cruxes.forEach(s => {
        event.create(`sgcommunity_pack:${s.id}`)
            .displayName(s.name)
            .mapColor("metal")
            .soundType("metal")
            .hardness(1)
            .resistance(1)
            .lightLevel(s.light ?? 0)
            .tagBoth(`sgcommunity_pack:cruxes`)
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("minecraft:needs_stone_tool")
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
            tier: "minecraft:needs_stone_tool",
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
            tier: "minecraft:needs_stone_tool",
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
            id: "inactive_naquadria_crux",
            name: "Inactive Naquadria Crux",
            mapColor: "metal",
            sound: "metal",
            hardness: 2,
            resistance: 10,
            tool: "pickaxe",
            tier: "minecraft:needs_stone_tool"
        },
        {
            id: "conversion_catalyst",
            name: "Conversion Catalyst",
            mapColor: "metal",
            sound: "metal",
            hardness: 3,
            resistance: 3,
            tool: "pickaxe",
            tier: "minecraft:needs_stone_tool"
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
