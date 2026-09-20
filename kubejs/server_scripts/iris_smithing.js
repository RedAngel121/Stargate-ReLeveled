// priority: 1
//
// SGJourney iris cladding for Minecraft 1.21.1 / NeoForge.
//
// Includes every StargateIrisItem currently registered by SGJourney:
// Copper, Iron, Golden, Diamond, Netherite,
// Naquadah, Naquadah Copper Alloy, Naquadah Alloy (iron),
// Trinium, Bronze, Steel.
//
// Existing model-data values 1-8 are preserved for compatibility.
// Newly-added:
//   9  Naquadah
//   10 Naquadah Copper Alloy
//   11 Trinium

ServerEvents.recipes(event => {
    var smithing_template_item = 'minecraft:paper'

    function getSGJourneyTexturePath(materialName, textureOverride) {
        var name = textureOverride || materialName.toLowerCase().replace(/ /g, '_')
        return `sgjourney:textures/entity/stargate/iris/${name}_iris.png`
    }

    var iris_materials = {
        "Copper": { "block": "c:ingots/copper", "item": "sgjourney:copper_iris", "modelData": 1 },
        "Iron": { "block": "c:ingots/iron", "item": "sgjourney:iron_iris", "modelData": 2 },
        "Golden": { "block": "c:ingots/gold", "item": "sgjourney:golden_iris", "modelData": 3 },
        "Diamond": { "block": "c:gems/diamond", "item": "sgjourney:diamond_iris", "modelData": 4 },
        "Netherite": { "block": "c:ingots/netherite", "item": "sgjourney:netherite_iris", "modelData": 5 },
        "Naquadah Alloy": { "block": "c:ingots/naquadah_alloy", "item": "sgjourney:naquadah_iron_iris", "modelData": 6, "gateTexture": "naquadah_iron_alloy" },
        "Bronze": { "block": "c:ingots/bronze", "item": "sgjourney:bronze_iris", "modelData": 7 },
        "Steel": { "block": "c:ingots/steel", "item": "sgjourney:steel_iris", "modelData": 8 },
        "Naquadah": { "block": "c:ingots/naquadah", "item": "sgjourney:naquadah_iris", "modelData": 9 },
        "Naquadah Copper Alloy": { "block": "c:ingots/naquadah_copper_alloy", "item": "sgjourney:naquadah_copper_iris", "modelData": 10, "gateTexture": "naquadah_copper_alloy" },
        "Trinium": { "block": "c:ingots/trinium", "item": "sgjourney:trinium_iris", "modelData": 11 }
    }

    Object.entries(iris_materials).forEach(([baseMaterial, baseData]) => {
        Object.entries(iris_materials).forEach(([additionMaterial, additionData]) => {
            if (baseMaterial === additionMaterial) return

            var textureFile = getSGJourneyTexturePath(
                additionMaterial,
                additionData.gateTexture
            )

            event.custom({
                type: 'minecraft:smithing_transform',
                template: { item: smithing_template_item },
                base: { item: baseData.item },
                addition: { tag: additionData.block },
                result: {
                    id: baseData.item,
                    components: {
                        'sgjourney:iris_texture': textureFile,
                        'minecraft:custom_name': JSON.stringify({
                            text: `${additionMaterial} Clad ${baseMaterial} Iris`,
                            italic: false
                        }),
                        'minecraft:custom_model_data': additionData.modelData
                    }
                }
            }).id(
                `kubejs:smithing_${baseData.item.replace(':', '_')}_with_${additionMaterial.toLowerCase().replace(/ /g, '_')}`
            )
        })
    })
})
