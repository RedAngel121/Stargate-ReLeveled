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
    let saplings = ["pamhc2trees:apple_sapling", "pamhc2trees:avocado_sapling", "pamhc2trees:candlenut_sapling", "pamhc2trees:cherry_sapling", "pamhc2trees:chestnut_sapling", "pamhc2trees:gooseberry_sapling", "pamhc2trees:lemon_sapling", "pamhc2trees:nutmeg_sapling", "pamhc2trees:orange_sapling", "pamhc2trees:peach_sapling", "pamhc2trees:pear_sapling", "pamhc2trees:plum_sapling", "pamhc2trees:walnut_sapling", "pamhc2trees:spiderweb_sapling", "pamhc2trees:hazelnut_sapling", "pamhc2trees:pawpaw_sapling", "pamhc2trees:soursop_sapling", "pamhc2trees:almond_sapling", "pamhc2trees:apricot_sapling", "pamhc2trees:banana_sapling", "pamhc2trees:cashew_sapling", "pamhc2trees:cinnamon_sapling", "pamhc2trees:coconut_sapling", "pamhc2trees:date_sapling", "pamhc2trees:dragonfruit_sapling", "pamhc2trees:durian_sapling", "pamhc2trees:fig_sapling", "pamhc2trees:grapefruit_sapling", "pamhc2trees:lime_sapling", "pamhc2trees:mango_sapling", "pamhc2trees:olive_sapling", "pamhc2trees:papaya_sapling", "pamhc2trees:paperbark_sapling", "pamhc2trees:pecan_sapling", "pamhc2trees:peppercorn_sapling", "pamhc2trees:persimmon_sapling", "pamhc2trees:pistachio_sapling", "pamhc2trees:pomegranate_sapling", "pamhc2trees:starfruit_sapling", "pamhc2trees:vanillabean_sapling", "pamhc2trees:breadfruit_sapling", "pamhc2trees:guava_sapling", "pamhc2trees:jackfruit_sapling", "pamhc2trees:lychee_sapling", "pamhc2trees:passionfruit_sapling", "pamhc2trees:rambutan_sapling", "pamhc2trees:tamarind_sapling", "pamhc2trees:maple_sapling", "pamhc2trees:pinenut_sapling", "pamhc2trees:acorn_sapling"]
    for (let each of saplings) {
        event.add("minecraft:saplings", each)
    }

    let wheat_flours = ["create:wheat_flour", "refurbished_furniture:wheat_flour", "pamhc2foodcore:flouritem"]
    for (let each of wheat_flours) {
        event.add("c:flour/flour", each)
        event.add("c:flours/wheat", each)
    }

    let salts = ["mekanism:salt", "refurbished_furniture:sea_salt", "pamhc2foodcore:saltitem"]
    for (let each of salts) {
        event.add("c:salt/salt", each)
        event.add("c:dusts/salt", each)
    }

    // Apperently Create Confectionery doesnt like using tags either
    let chocolates = ["create_confectionery:bar_of_white_chocolate", "create_confectionery:bar_of_ruby_chocolate", "create_confectionery:bar_of_black_chocolate"]
    for (let each of chocolates) {
        event.add("c:foods/chocolate", each)
    }

    let buckets = ["black_chocolate", "white_chocolate", "ruby_chocolate", "caramel"]
    for (let each of buckets) {
        event.add("c:buckets", "create_confectionery:" + each + "_bucket")
        event.add("c:buckets/" + each, "create_confectionery:" + each + "_bucket")
    }
})

// Create Confectionery Fluid Tags for buckets
ServerEvents.tags("fluid", event => {
    let liquids = ["black_chocolate", "white_chocolate", "ruby_chocolate", "caramel"]
    for (let each of liquids) {
        event.add("c:" + each, "create_confectionery:" + each)
        event.add("c:" + each, "create_confectionery:" + each + "_bucket")
    }
})

// Ad Astra doesnt like using tags
let sands = ["ad_astra:moon_sand", "ad_astra:mars_sand", "ad_astra:venus_sand"]
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

// Adding Ad Astra tags to RFTools Shields so it can hold Distributed Oxygen on airless planets
ServerEvents.tags('block', event => {
    event.add('ad_astra:blocks_flood_fill', 'rftoolsbuilder:shielding_translucent')
    event.add('ad_astra:blocks_flood_fill', 'rftoolsbuilder:shielding_solid')
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
    event.add("c:seeds", "mysticalagriculture:calorite_seeds")
    event.add("c:seeds", "mysticalagriculture:desh_seeds")
    event.add("c:seeds", "mysticalagriculture:entro_seeds")
    event.add("c:seeds", "mysticalagriculture:naquadah_seeds")
    event.add("c:seeds", "mysticalagriculture:ostrum_seeds")
})

// My new essences need tags too...
ServerEvents.tags("item", event => {
    event.add("mysticalagriculture:essences", "mysticalagriculture:borax_essence")
    event.add("mysticalagriculture:essences", "mysticalagriculture:calorite_essence")
    event.add("mysticalagriculture:essences", "mysticalagriculture:desh_essence")
    event.add("mysticalagriculture:essences", "mysticalagriculture:entro_essence")
    event.add("mysticalagriculture:essences", "mysticalagriculture:naquadah_essence")
    event.add("mysticalagriculture:essences", "mysticalagriculture:ostrum_essence")
})

// Adding DarkUtils Charms to Curios
ServerEvents.tags('item', event => {
    event.add('curios:charm', 'darkutils:charm_pride');
    event.add('curios:charm', 'darkutils:charm_gluttony');
    event.add('curios:charm', 'darkutils:charm_sloth');
})

// Adding All Bookshelves to Oritech Arcane tag
let shelves = [
    "chipped:bookshelf", "c:bookshelves", "handcrafted:shelves", "cognition:infected_bookshelf", "cognition:infected_archivers_bookshelf", "cognition:infected_enchanted_bookshelf", "framedblocks:framed_chiseled_bookshelf",
    "apothic_enchanting:hellshelf", "apothic_enchanting:infused_hellshelf", "apothic_enchanting:blazing_hellshelf", "apothic_enchanting:glowing_hellshelf", "apothic_enchanting:sightshelf", "apothic_enchanting:sightshelf_t2",
    "apothic_enchanting:seashelf", "apothic_enchanting:infused_seashelf", "apothic_enchanting:crystal_seashelf", "apothic_enchanting:heart_seashelf", "apothic_enchanting:filteringshelf", "apothic_enchanting:treasure_shelf",
    "apothic_enchanting:deepshelf", "apothic_enchanting:dormant_deepshelf", "apothic_enchanting:echoing_deepshelf", "apothic_enchanting:soul_touched_deepshelf", "apothic_enchanting:echoing_sculkshelf", "apothic_enchanting:soul_touched_sculkshelf",
    "apothic_enchanting:endshelf", "apothic_enchanting:pearl_endshelf", "apothic_enchanting:draconic_endshelf", "apothic_enchanting:beeshelf", "apothic_enchanting:melonshelf", "apothic_enchanting:stoneshelf", "apothic_enchanting:geode_helf",
]
ServerEvents.tags("block", event => {
    for (let each of shelves) {
        event.add("oritech:refinery/arcane", each)
    }
})
