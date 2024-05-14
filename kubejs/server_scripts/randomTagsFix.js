// Pams salt is now Mek salt instead
ServerEvents.tags('item', event => {
    event.add('forge:dusts/salt', 'pamhc2foodcore:saltitem')
})

// Adding Blaze stuff for forge cause mek hates items
ServerEvents.tags('item', event => {
    event.add('forge:dusts/blaze', 'minecraft:blaze_powder')
    event.add('forge:eggs/blaze', 'minecraft:blaze_spawn_egg')
})

// RFTools Shields can now hold back Oxygen generated from Ad Astra
ServerEvents.tags('block', event => {
    event.add('ad_astra:blocks_flood_fill', 'rftoolsbuilder:shielding_translucent')
    event.add('ad_astra:blocks_flood_fill', 'rftoolsbuilder:shielding_solid')
})

// Create:Deco & Create:Crafts-Additions Zinc Plates are now Forge Zinc Plates
ServerEvents.tags('item', event => {
    event.add('forge:plates/zinc', 'createdeco:zinc_sheet')
    event.add('forge:plates', 'createdeco:zinc_sheet')
    event.add('createdeco:internal/plates/zinc_plates', 'createaddition:zinc_sheet')
})

// Obsidian Dusts for Create sturdy sheets
ServerEvents.tags('item', event => {
    event.add('forge:dusts/obsidian', 'create:powdered_obsidian')
    event.add('forge:dusts/obsidian', 'mekanism:dust_obsidian')
})
