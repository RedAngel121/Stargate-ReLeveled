// Bottomless Fluid Tagging
let bottomless = ["create:honey", "create:chocolate", "c:experience", "mekanismgenerators:fusion_fuel"];

ServerEvents.tags("fluid", event => {
    for (let tag of bottomless) {
        event.add("create:bottomless/allow", tag);
    }
});

// SGCommunity_Pack Convertables using Oredictionificator
ServerEvents.tags("item", event => {
    event.add("sgcommunity_pack:convert_mosfet", "minecraft:redstone");
    event.add("sgcommunity_pack:convert_ic", "mekanism:ingot_osmium");
    event.add("sgcommunity_pack:convert_computation_core", "mekanism:advanced_control_circuit");
    event.add("sgcommunity_pack:convert_isotopic_oscillator", "mekanism:ingot_uranium");
});

// Adding Naq to the `c:ores/naquadah` tag
ServerEvents.tags("item", event => {
    event.add("c:ores/naquadah", "sgjourney:naquadah_ore")
    event.add("c:ores/naquadah", "sgjourney:deepslate_naquadah_ore")
    event.add("c:ores/naquadah", "sgjourney:nether_naquadah_ore")
    event.add("c:ores_in_ground/stone", "sgjourney:naquadah_ore")
    event.add("c:ores_in_ground/deepslate", "sgjourney:deepslate_naquadah_ore")
    event.add("c:ores_in_ground/netherrack", "sgjourney:nether_naquadah_ore")
})
ServerEvents.tags("block", event => {
    event.add("c:ores/naquadah", "sgjourney:naquadah_ore")
    event.add("c:ores/naquadah", "sgjourney:deepslate_naquadah_ore")
    event.add("c:ores/naquadah", "sgjourney:nether_naquadah_ore")
    event.add("c:ores_in_ground/stone", "sgjourney:naquadah_ore")
    event.add("c:ores_in_ground/deepslate", "sgjourney:deepslate_naquadah_ore")
    event.add("c:ores_in_ground/netherrack", "sgjourney:nether_naquadah_ore")
})

// Adding Blaze stuff cause mek hates items
ServerEvents.tags("item", event => {
    event.add("c:dusts/blaze", "minecraft:blaze_powder")
    event.add("c:eggs/blaze", "minecraft:blaze_spawn_egg")
})

// PAM NEEDS TO GET A GRIP
let salts = ["mekanism:salt", "refurbished_furniture:sea_salt", "pamhc2foodcore:saltitem"]
let wheat_flours = ["create:wheat_flour", "refurbished_furniture:wheat_flour", "pamhc2foodcore:flouritem"]
ServerEvents.tags("item", event => {
    for (let each of salts) {
        event.add("c:salt/salt", each)
        event.add("c:dusts/salt", each)
    }
    for (let each of wheat_flours) {
        event.add("c:flour/flour", each)
        event.add("c:flours/wheat", each)
    }
})

// Tagging Limited Barrels separately from chests
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
