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

// Removing tags from Ad Astra for Deco
ServerEvents.tags('fluid', event => {
    event.remove('ad_astra:evaporates_in_space', 'minecraft:water')
    event.remove('ad_astra:freezes_in_space', 'minecraft:water')
})

// Removing Space Tags for Building
ServerEvents.tags('block', event => {
    event.remove('ad_astra:destroyed_in_space', '#minecraft:saplings')
    event.remove('ad_astra:destroyed_in_space', '#minecraft:leaves')
    event.remove('ad_astra:destroyed_in_space', '#minecraft:flowers')
    event.remove('ad_astra:destroyed_in_space', '#minecraft:candles')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:torch')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:lantern')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:campfire')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:jack_o_lantern')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:cocoa_beans')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:vine')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:brown_mushroom_block')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:red_mushroom_block')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:big_dripleaf')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:small_dripleaf')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:grass')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:tall_grass')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:sweet_berries')
    event.remove('ad_astra:destroyed_in_space', 'minecraft:bamboo')
})

// Fixing Chisel Chipped Integration
ServerEvents.tags('item', event => {
    event.add('chisel_chipped_integration:technical_block', 'chisel_chipped_integration:technical_vent')
})
ServerEvents.tags('item', event => {
    event.add('chisel_chipped_integration:tyrian', '#chisel_chipped_integration:metals/aluminum_blocks')
    event.add('chisel_chipped_integration:tyrian', '#chisel_chipped_integration:metals/invar_blocks')
    event.add('chisel_chipped_integration:tyrian', '#chisel_chipped_integration:metals/silver_blocks')
    event.add('chisel_chipped_integration:tyrian', '#forge:storage_blocks/cobalt')
    event.add('chisel_chipped_integration:tyrian', '#forge:storage_blocks/electrum')
    event.add('chisel_chipped_integration:tyrian', '#forge:storage_blocks/nickel')
    event.add('chisel_chipped_integration:tyrian', '#forge:storage_blocks/platinum')
})

// Tagging Limited Barrels
let barrel_mats = ["", "_iron", "_copper", "_gold", "_diamond", "_netherite"]
ServerEvents.tags("block", event => {
  for (let each of barrel_mats) {
    event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_1")
    event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_2")
    event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_3")
    event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_4")
  }
})
ServerEvents.tags("item", event => {
  for (let each of barrel_mats) {
    event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_1")
    event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_2")
    event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_3")
    event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_4")
  }
})
