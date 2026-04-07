ServerEvents.recipes(event => {
    let smithing_template_item = 'minecraft:paper'
    function getSGJourneyTexturePath(materialName) {
        return `sgjourney:textures/entity/stargate/iris/${materialName.toLowerCase().replace(/ /g, '_')}_iris.png`
    }
    let iris_materials = {
        "Copper": { "block": "c:ingots/copper", "item": "sgjourney:copper_iris" },
        "Iron": { "block": "c:ingots/iron", "item": "sgjourney:iron_iris" },
        "Golden": { "block": "c:ingots/gold", "item": "sgjourney:golden_iris" },
        "Diamond": { "block": "c:gems/diamond", "item": "sgjourney:diamond_iris" },
        "Netherite": { "block": "c:ingots/netherite", "item": "sgjourney:netherite_iris" },
        "Naquadah Alloy": { "block": "c:ingots/naquadah_alloy", "item": "sgjourney:naquadah_alloy_iris" },
        "Bronze": { "block": "c:ingots/bronze", "item": "sgjourney:bronze_iris" },
        "Steel": { "block": "c:ingots/steel", "item": "sgjourney:steel_iris" }
    }
    Object.entries(iris_materials).forEach(([baseMaterial, baseData]) => {
        console.log("----- STARTING NEW SUBSET -----")
        console.log(iris_materials[baseMaterial])
        Object.entries(iris_materials).forEach(([additionMaterial, additionData]) => {
            console.log(iris_materials[additionMaterial])
            if (baseMaterial === additionMaterial) return
            let textureFile = getSGJourneyTexturePath(additionMaterial)
            let additionItem = { tag: additionData.block }
            event.custom({
                type: 'minecraft:smithing_transform',
                template: { item: smithing_template_item },
                base: { item: baseData.item },
                addition: additionItem,
                result: {
                    id: baseData.item,
                    components: {
                        "minecraft:custom_name": JSON.stringify({
                            text: `${additionMaterial} Clad ${baseMaterial} Iris`,
                            italic: false
                        })
                    }
                },
            }).id(`kubejs:smithing_${baseData.item.replace(':', '_')}_with_${additionMaterial.toLowerCase().replace(/ /g, '_')}`)
        })
    })
})