// Bottomless Fluid Tagging
let bottomless = ["create:honey", "create:chocolate", "#c:experience", "mekanismgenerators:fusion_fuel"];

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

// Adding Blaze stuff cause mek hates items
ServerEvents.tags('item', event => {
    event.add('c:dusts/blaze', 'minecraft:blaze_powder')
    event.add('c:eggs/blaze', 'minecraft:blaze_spawn_egg')
})

// SALT IS SALT
ServerEvents.tags('item', event => {
    event.add('c:dusts/salt', 'c:salt/salt')
    event.add('c:salt/salt', 'c:dusts/salt')
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
