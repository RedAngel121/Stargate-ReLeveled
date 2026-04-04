ServerEvents.recipes(event => {
    const START = 'sgcommunity_pack:silicon_wafer'
    const INCOMPLETE = 'sgcommunity_pack:incomplete_integrated_circuit_wafer'
    const FINAL = 'sgcommunity_pack:integrated_circuit_wafer'

    function loreLine(label) {
        return JSON.stringify({
            text: String(label),
            color: 'dark_purple',
            italic: true
        })
    }

    function waferComponents(step, label) {
        return {
            'minecraft:custom_data': {
                sgcommunity_pack: {
                    circuit_step: step,
                    circuit_label: String(label)
                }
            },
            'minecraft:lore': [
                loreLine(label)
            ]
        }
    }

    function stagedWaferInput(step, label) {
        return {
            type: 'neoforge:components',
            items: [INCOMPLETE],
            components: waferComponents(step, label),
            strict: false,
            amount: 1
        }
    }

    function stagedWaferOutput(step, label) {
        return {
            id: INCOMPLETE,
            count: 1,
            components: waferComponents(step, label)
        }
    }

    event.custom({
        type: "mekanism:injecting",
        item_input: {
            item: START,
            amount: 1
        },
        chemical_input: {
            tag: "mekanism:water_vapor",
            amount: 5
        },
        output: stagedWaferOutput(2, "Step 2: Apply Photoresist"),
        "per_tick_usage": true
    })

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(2, "Step 2: Apply Photoresist"),
        chemical_input: {
            chemical: "mekanism:photoresist",
            amount: 2
        },
        output: stagedWaferOutput(3, "Step 3: Expose Photoresist"),
        "per_tick_usage": true
    })

    AE2Recipes.inscriber(
    event,
    'inscribe',
    stagedWaferInput(3, "Step 3: Expose Photoresist"),
    "sgcommunity_pack:integrated_circuit_photomask",
    stagedWaferOutput(4, "Step 4: Etch Wafer"),
    )

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(4, "Step 4: Etch Wafer"),
        chemical_input: {
            chemical: "mekanism:hydrofluoric_acid",
            amount: 2
        },
        output: stagedWaferOutput(5, "Step 5: Apply Photoresist"),
        "per_tick_usage": true
    })

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(5, "Step 5: Apply Photoresist"),
        chemical_input: {
            chemical: "mekanism:photoresist",
            amount: 2
        },
        output: stagedWaferOutput(6, "Step 6: Expose Photoresist"),
        "per_tick_usage": true
    })

    AE2Recipes.inscriber(
    event,
    'inscribe',
    stagedWaferInput(6, "Step 6: Expose Photoresist"),
    "sgcommunity_pack:integrated_circuit_photomask",
    stagedWaferOutput(7, "Step 7: Inject Phosphorus"),
    )

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(7, "Step 7: Inject Phosphorus"),
        chemical_input: {
            chemical: "mekanism:phosphorus",
            amount: 1
        },
        output: stagedWaferOutput(8, "Step 8: Apply Photoresist"),
        "per_tick_usage": true
    })

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(8, "Step 8: Apply Photoresist"),
        chemical_input: {
            chemical: "mekanism:photoresist",
            amount: 2
        },
        output: stagedWaferOutput(9, "Step 9: Expose Photoresist"),
        "per_tick_usage": true
    })

    AE2Recipes.inscriber(
    event,
    'inscribe',
    stagedWaferInput(9, "Step 9: Expose Photoresist"),
    "sgcommunity_pack:integrated_circuit_photomask",
    stagedWaferOutput(10, "Step 10: Etch Wafer"),
    )

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(10, "Step 10: Etch Wafer"),
        chemical_input: {
            chemical: "mekanism:hydrofluoric_acid",
            amount: 2
        },
        output: stagedWaferOutput(11, "Step 11: Inject Silicon"),
        "per_tick_usage": true
    })

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(11, "Step 11: Inject Silicon"),
        chemical_input: {
            chemical: "mekanism:silicon",
            amount: 5
        },
        output: stagedWaferOutput(12, "Step 12: Apply Photoresist"),
        "per_tick_usage": true
    })

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(12, "Step 12: Apply Photoresist"),
        chemical_input: {
            chemical: "mekanism:photoresist",
            amount: 2
        },
        output: stagedWaferOutput(13, "Step 13: Expose Photoresist"),
        "per_tick_usage": true
    })

    AE2Recipes.inscriber(
    event,
    'inscribe',
    stagedWaferInput(13, "Step 13: Expose Photoresist"),
    "sgcommunity_pack:integrated_circuit_photomask",
    stagedWaferOutput(14, "Step 14: Etch Wafer"),
    )

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(14, "Step 14: Etch Wafer"),
        chemical_input: {
            chemical: "mekanism:hydrofluoric_acid",
            amount: 2
        },
        output: stagedWaferOutput(15, "Step 15: Apply Photoresist"),
        "per_tick_usage": true
    })

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(15, "Step 15: Apply Photoresist"),
        chemical_input: {
            chemical: "mekanism:photoresist",
            amount: 2
        },
        output: stagedWaferOutput(16, "Step 16: Expose Photoresist"),
        "per_tick_usage": true
    })

    AE2Recipes.inscriber(
    event,
    'inscribe',
    stagedWaferInput(16, "Step 16: Expose Photoresist"),
    "sgcommunity_pack:integrated_circuit_photomask",
    stagedWaferOutput(17, "Step 17: Inject Boron"),
    )

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(17, "Step 17: Inject Boron"),
        chemical_input: {
            chemical: "mekanism:boron_trifluoride",
            amount: 2
        },
        output: stagedWaferOutput(18, "Step 18: Apply Photoresist"),
        "per_tick_usage": true
    })

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(18, "Step 18: Apply Photoresist"),
        chemical_input: {
            chemical: "mekanism:photoresist",
            amount: 2
        },
        output: stagedWaferOutput(19, "Step 19: Expose Photoresist"),
        "per_tick_usage": true
    })

    AE2Recipes.inscriber(
    event,
    'inscribe',
    stagedWaferInput(19, "Step 19: Expose Photoresist"),
    "sgcommunity_pack:integrated_circuit_photomask",
    stagedWaferOutput(20, "Step 20: Inject Phosphorus"),
    )

    event.custom({
        type: "mekanism:injecting",
        item_input: stagedWaferInput(20, "Step 20: Inject Phosphorus"),
        chemical_input: {
            chemical: "mekanism:phosphorus",
            amount: 2
        },
        output: {
            id: FINAL,
            count: 1
        },
        "per_tick_usage": true
    })
})