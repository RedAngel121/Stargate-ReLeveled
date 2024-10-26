// priority: 1
// Define materials and their corresponding item and block names
// Listen for the ServerEvents.recipes event to add custom recipes
ServerEvents.recipes(event => {
    let smithing_template_item = 'minecraft:paper' //This must be an item

    // Function to generate the texture file path based on the material name
    function getSGJourneyTexturePath(materialName) {
        return `sgjourney:textures/entity/stargate/iris/${materialName.toLowerCase().replace(/ /g, '_')}_iris.png`
    }

    let iris_materials = {
        "Copper": { "block": "forge:ingots/copper", "item": "sgjourney:copper_iris" },
        "Iron": { "block": "forge:ingots/iron", "item": "sgjourney:iron_iris" },
        "Golden": { "block": "forge:ingots/gold", "item": "sgjourney:golden_iris" },
        "Diamond": { "block": "forge:gems/diamond", "item": "sgjourney:diamond_iris" },
        "Netherite": { "block": "forge:ingots/netherite", "item": "sgjourney:netherite_iris" },
        "Naquadah Alloy": { "block": "forge:ingots/naquadah_alloy", "item": "sgjourney:naquadah_alloy_iris" },
        "Bronze": { "block": "forge:ingots/bronze", "item": "sgjourney:bronze_iris" },
        "Steel": { "block": "forge:ingots/steel", "item": "sgjourney:steel_iris" }
    }

    // Generate all combinations of smithing recipes
    Object.entries(iris_materials).forEach(([baseMaterial, baseData]) => {
        console.log("----- STARTING NEW SUBSET -----")
        console.log(iris_materials[baseMaterial])
        Object.entries(iris_materials).forEach(([additionMaterial, additionData]) => {
            console.log(iris_materials[additionMaterial])
            if (baseMaterial === additionMaterial) return
            let textureFile = getSGJourneyTexturePath(additionMaterial)
            let nbtData = {
                texture: textureFile,
                display: {
                    Name: JSON.stringify({
                        text: `${additionMaterial} Clad ${baseMaterial} Iris`,
                        italic: false
                    })
                }
            }

            let additionItem = { tag: additionData.block }

            event.custom({
                type: 'minecraft:smithing_transform',
                template: { item: smithing_template_item },
                base: baseData.item,
                addition: additionItem,
                result: {
                    item: baseData.item,
                    nbt: nbtData
                },
            }).id(`kubejs:smithing_${baseData.item.replace(':', '_')}_with_${additionMaterial.toLowerCase().replace(/ /g, '_')}`)
        })
    })
})