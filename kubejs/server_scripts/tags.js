// Bottomless Fluid Tagging
let bottomless = ["create:honey", "create:chocolate", "create_confectionery:black_chocolate", "create_confectionery:white_chocolate", "create_confectionery:ruby_chocolate", "c:experience", "mekanismgenerators:fusion_fuel"];
ServerEvents.tags("fluid", event => {
    for (let fluids of bottomless) {
        event.add("create:bottomless/allow", fluids);
    }
});

// SGCommunity_Pack Convertables using Oredictionificator
ServerEvents.tags("item", event => {
    event.add("convert:mosfet", "minecraft:redstone");
    event.add("convert:ic", "mekanism:ingot_osmium");
    event.add("convert:computation_core", "mekanism:advanced_control_circuit");
    event.add("convert:isotopic_oscillator", "mekanism:ingot_uranium");
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

// Adding Blaze stuff to tags cause mek recipes hate items
ServerEvents.tags("item", event => {
    event.add("c:dusts/blaze", "minecraft:blaze_powder")
    event.add("c:eggs/blaze", "minecraft:blaze_spawn_egg")
})

ServerEvents.tags("item", event => {

    // PAM NEEDS TO GET A GRIP
    let wheat_flours = ["create:wheat_flour", "refurbished_furniture:wheat_flour", "pamhc2foodcore:flouritem"]
    for (let each of wheat_flours) {
        event.add("c:flour/flour", each)
        event.add("c:flours/wheat", each)
    }

    // SALT IS SALT PAM
    let salts = ["mekanism:salt", "refurbished_furniture:sea_salt", "pamhc2foodcore:saltitem"]
    for (let each of salts) {
        event.add("c:salt/salt", each)
        event.add("c:dusts/salt", each)
    }

    // Apperently Create Confec doesnt like using tags either
    let chocolates = ["create_confectionery:bar_of_white_chocolate", "create_confectionery:bar_of_ruby_chocolate", "create_confectionery:bar_of_black_chocolate"]
    for (let each of chocolates) {
        event.add("c:foods/chocolate", each)
    }
})

// Stellaris doesnt like using tags
let sands = ["stellaris:moon_sand", "stellaris:mars_sand", "stellaris:venus_sand"]
ServerEvents.tags("item", event => {
    for (let each of sands) {
        event.add("c:sands", each)
    }
})
ServerEvents.tags("block", event => {
    for (let each of sands) {
        event.add("c:sands", each)
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

// My new seeds need tags too...
ServerEvents.tags("item", event => {
    event.add("c:seeds", "mysticalagriculture:borax_seeds")
    event.add("c:seeds", "mysticalagriculture:corronium_seeds")
    event.add("c:seeds", "mysticalagriculture:desh_seeds")
    event.add("c:seeds", "mysticalagriculture:naquadah_seeds")
    event.add("c:seeds", "mysticalagriculture:tharsite_seeds")
})

// My new essences need tags too...
ServerEvents.tags("item", event => {
    event.add("mysticalagriculture:essences", "mysticalagriculture:borax_essence")
    event.add("mysticalagriculture:essences", "mysticalagriculture:corronium_essence")
    event.add("mysticalagriculture:essences", "mysticalagriculture:desh_essence")
    event.add("mysticalagriculture:essences", "mysticalagriculture:naquadah_essence")
    event.add("mysticalagriculture:essences", "mysticalagriculture:tharsite_essence")
})

// Adding DarkUtils Charms to Curios
ServerEvents.tags('item', event => {
    event.add('curios:charm', 'darkutils:charm_pride');
    event.add('curios:charm', 'darkutils:charm_gluttony');
    event.add('curios:charm', 'darkutils:charm_sloth');
})
