// Bottomless Fluid Tagging
let bottomless = ["create:honey", "create:chocolate", "#c:experience", "mekanismgenerators:fusion_fuel"];

ServerEvents.tags("fluid", event => {
    for (let tag of bottomless) {
        event.add("create:bottomless/allow", tag);
    }
});

// Adding Blaze stuff cause mek hates items
ServerEvents.tags('item', event => {
    event.add('c:dusts/blaze', 'minecraft:blaze_powder')
    event.add('c:eggs/blaze', 'minecraft:blaze_spawn_egg')
})


// VERIFY HOW MUCH OF THIS IS EVEN REQUIRED ANYMORE

// // Pams salt is now Mek salt instead
// ServerEvents.tags('item', event => {
//     event.add('c:dusts/salt', 'pamhc2foodcore:saltitem')
// })
// 
// // RFTools Shields can now hold back Oxygen generated from Ad Astra
// ServerEvents.tags('block', event => {
//     event.add('ad_astra:blocks_flood_fill', 'rftoolsbuilder:shielding_translucent')
//     event.add('ad_astra:blocks_flood_fill', 'rftoolsbuilder:shielding_solid')
// })
// 
// // Create:Deco & Create:Crafts-Additions Zinc Plates are now tagged Zinc Plates
// ServerEvents.tags('item', event => {
//     event.add('c:plates/zinc', 'createdeco:zinc_sheet')
//     event.add('c:plates', 'createdeco:zinc_sheet')
//     event.add('createdeco:internal/plates/zinc_plates', 'createaddition:zinc_sheet')
// })
// 
// // Obsidian Dusts for Create sturdy sheets
// ServerEvents.tags('item', event => {
//     event.add('c:dusts/obsidian', 'create:powdered_obsidian')
//     event.add('c:dusts/obsidian', 'mekanism:dust_obsidian')
// })
// 
// // Fixing Chisel Chipped Integration
// ServerEvents.tags('item', event => {
//     event.add('chisel_chipped_integration:technical_block', 'chisel_chipped_integration:technical_vent')
// })
// ServerEvents.tags('item', event => {
//     event.add('chisel_chipped_integration:tyrian', '#chisel_chipped_integration:metals/aluminum_blocks')
//     event.add('chisel_chipped_integration:tyrian', '#chisel_chipped_integration:metals/invar_blocks')
//     event.add('chisel_chipped_integration:tyrian', '#chisel_chipped_integration:metals/silver_blocks')
//     event.add('chisel_chipped_integration:tyrian', '#c:storage_blocks/cobalt')
//     event.add('chisel_chipped_integration:tyrian', '#c:storage_blocks/electrum')
//     event.add('chisel_chipped_integration:tyrian', '#c:storage_blocks/nickel')
//     event.add('chisel_chipped_integration:tyrian', '#c:storage_blocks/platinum')
// })
// 
// // Tagging Limited Barrels
// let barrel_mats = ["", "_iron", "_copper", "_gold", "_diamond", "_netherite"]
// ServerEvents.tags("block", event => {
//     for (let each of barrel_mats) {
//         event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_1")
//         event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_2")
//         event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_3")
//         event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_4")
//     }
// })
// ServerEvents.tags("item", event => {
//     for (let each of barrel_mats) {
//         event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_1")
//         event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_2")
//         event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_3")
//         event.add("sophisticatedstorage:limited_barrels", "sophisticatedstorage:limited" + each + "_barrel_4")
//     }
// })
