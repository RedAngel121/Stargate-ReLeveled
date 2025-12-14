### MAJOR CHANGES FROM 1.1+:
- Common Stargates is now **DISABLED** for the single player expeirence!
  - Change the `common_stargate_generation` to **true** in `sgjourney-common` config to enable this again (or if you start a server)
  - When enabled, all Common Stargates are now **buried**, use a structure compass to find them easily
- Lowered Abydos bedrock to -64 and added Mek ores
  - Please be careful of new chunk generation when mining in the deepslate
  - If you want to reset *Just Abydos*, drop by the discord and ask me how!

### Changes:

### Additions:

### Updates:
- **Forge: 47.4.9 -> 47.4.13**
- **Stargate Journey: Stargate Journey-0.6.42 -> Stargate Journey-0.6.44**
- **Stellar View: Stellar View-0.5.1 -> Stellar View-0.5.2**
- **Tectonic: tectonic-2.4.1 -> tectonic-3.0.17** WARNING: OLD WORLDS MIGHT NOT WORK AS INTENDED
- Advanced Peripherals: AdvancedPeripherals-0.7.45r -> AdvancedPeripherals-0.7.46r
- AllTheLeaks (Memory Leak Fix): alltheleaks-1.0.4 -> alltheleaks-1.1.1
- Anvian's Lib: anvianslib-1.2 -> anvianslib-1.4.1
- Applied Energistics 2 Wireless Terminals: ae2wtlib-15.3.0 -> ae2wtlib-15.3.3
- Applied Energistics 2: appliedenergistics2-15.4.8 -> appliedenergistics2-15.4.10
- Applied Mekanistics: Applied-Mekanistics-1.4.2 -> Applied-Mekanistics-1.4.3
- Balm: balm-7.3.35 -> balm-7.3.37
- Botany Trees: BotanyTrees-9.0.18 -> BotanyTrees-9.0.19
- CC: Tweaked: cc-tweaked-1.116.1 -> cc-tweaked-1.116.2
- Chat Heads: chat_heads-0.13.21 -> chat_heads-0.14.2
- CraterLib: CraterLib-2.1.5 -> CraterLib-3.0.1
- Create Crafts & Additions: createaddition-1.3.2 -> createaddition-1.3.3
- Create: Connected: create_connected-1.1.7 -> create_connected-1.1.10
- Create: Copycats+: copycats-3.0.2 -> copycats-3.0.4
- Create: create-6.0.6 -> create-6.0.8
- Create: Hypertubes: create_hypertube-0.2.5 -> create_hypertube-0.3.0
- Create: Steam 'n' Rails: Steam_Rails-1.6.13-alpha+forge -> Steam_Rails-1.6.14-beta+forge
- Distant Horizons: A Level of Detail mod: DistantHorizons-2.3.4-b -> DistantHorizons-2.4.0-b
- Easy Villagers: easy-villagers-1.1.35 -> easy-villagers-1.1.39
- Entity Culling Fabric/Forge: entityculling-1.8.2 -> entityculling-1.9.4
- FancyMenu: fancymenu_forge_3.7.0 -> fancymenu_forge_3.8.1
- FTB Library (Forge): ftb-library-2001.2.10 -> ftb-library-2001.2.12
- FTB Quests (Forge): ftb-quests-2001.4.14 -> ftb-quests-2001.4.17
- GeckoLib: geckolib-4.8.1 -> geckolib-4.8.2
- GraveStone Mod: gravestone-1.0.33 -> gravestone-1.0.35
- GuideME: guideme-20.1.13 -> guideme-20.1.14
- In Control!: incontrol-9.4.1 -> incontrol-9.4.5
- Inventory Sorter: inventorysorter-23.0.8 -> inventorysorter-23.0.11
- Just Enough Items (JEI): jei-15.20.0.113 -> jei-15.20.0.127
- Kotlin for Forge: kotlinforforge-4.11.0 -> kotlinforforge-4.12.0
- ModernFix: modernfix-5.24.4 -> modernfix-5.25.2
- Moonlight Lib: moonlight-2.16.12 -> moonlight-2.16.16
- MrCrayfish's Furniture Mod: Refurbished: refurbished_furniture-1.0.14 -> refurbished_furniture-1.0.20
- Sculk Horn: SculkHornMod-3.0 -> SculkHornMod-3.1
- Simple Backups: SimpleBackups-3.1.16 -> SimpleBackups-3.1.22
- Simple Discord RPC: SimpleRPC-4.0.4 -> SimpleRPC-4.0.5
- Simple Voice Chat: voicechat-2.6.4 -> voicechat-2.6.7
- Sophisticated Backpacks Create Integration: sophisticatedbackpackscreateintegration-0.1.3.11 -> sophisticatedbackpackscreateintegration-0.1.5.30
- Sophisticated Backpacks: sophisticatedbackpacks-3.24.6.1366 -> sophisticatedbackpacks-3.24.15.1445
- Sophisticated Core: sophisticatedcore-1.2.92.1159 -> sophisticatedcore-1.2.110.1287
- Sophisticated Storage Create Integration: sophisticatedstoragecreateintegration-0.1.12.36 -> sophisticatedstoragecreateintegration-0.1.14.55
- Sophisticated Storage in Motion: sophisticatedstorageinmotion-0.10.20.126 -> sophisticatedstorageinmotion-0.10.25.156
- Sophisticated Storage: sophisticatedstorage-1.4.6.1302 -> sophisticatedstorage-1.4.16.1387
- UnlimitedPeripheralWorks: peripheralworks-1.5.5 -> peripheralworks-1.7.13

### Removals:

ADDING BOTANY POTS KUBEJS:
FIX RECIPES:
ServerEvents.recipes(event => {
    // for DisplayState, DropItem, and GrowthAmount please install ProbeJS for reference

    event.recipes.botanypots.crop(
        "minecraft:candle", // seed item
        "#minecraft:leaves", // soils that this crop can be planted on
        DisplayState.basic("minecraft:candle"), // the block that is displayed while growing
        [
            DropItem.item("minecraft:candle", 1.0) // item (use Item.of to include stack size), chance
        ],
        100, // how many ticks this takes to grow
        0.1 // optional, yield, chance for the crop to drop
    );

    event.recipes.botanypots.soil(
        "minecraft:oak_leaves", // the item that this soil is attached to
        DisplayState.basic("minecraft:oak_leaves"), // the block that is displayed while growing
        0.5, // optional, growth modifier, example: 0.5 means all crops will grow an additional 50% faster
        0.0 // optional, yield modifier, example: 0.5 means that all crops have a additional 50% chance to drop a crop
    );

    event.recipes.botanypots.fertilizer(
        "minecraft:iron_ingot", // fertilizer item
        GrowthAmount.range(10, 20) // min growth ticks, max growth ticks
    )
})