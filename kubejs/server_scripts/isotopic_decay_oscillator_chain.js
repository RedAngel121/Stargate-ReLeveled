ServerEvents.recipes(event => {
    const START = 'sgcommunity_pack:uranium_wafer'
    const INCOMPLETE = 'sgcommunity_pack:incomplete_isotopic_decay_oscillator_wafer'
    const FINAL = 'sgcommunity_pack:isotopic_decay_oscillator_wafer'

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

//    event.custom({
//        type: "mekanism:injecting",
//        item_input: {
//            item: START,
//            amount: 1
//        },
//        chemical_input: {
//            chemical: "mekanism:silicon",
//            amount: 1
//        },
//        output: stagedWaferOutput(2, "Step 2: Inject Water Vapor"),
//        "per_tick_usage": true
//    })
//
//    event.custom({
//        type: "mekanism:injecting",
//        item_input: stagedWaferInput(2, "Step 2: Inject Water Vapor"),
//        chemical_input: {
//            tag: "mekanism:water_vapor",
//            amount: 1
//        },
//        output: stagedWaferOutput(3, "Step 3: Etch Wafer"),
//        "per_tick_usage": true
//    })
//
//    event.custom({
//        type: "mekanism:injecting",
//        item_input: stagedWaferInput(3, "Step 3: Etch Wafer"),
//        chemical_input: {
//            chemical: "mekanism:hydrofluoric_acid",
//            amount: 1
//        },
//        output: stagedWaferOutput(4, "Step 4: Inject Boron"),
//        "per_tick_usage": true
//    })
//
//    event.custom({
//        type: "mekanism:injecting",
//        item_input: stagedWaferInput(4, "Step 4: Inject Boron"),
//        chemical_input: {
//            chemical: "mekanism:boron_trifluoride",
//            amount: 1
//        },
//        output: stagedWaferOutput(5, "Step 5: Inject Phosphorus"),
//        "per_tick_usage": true
//    })
//
//    event.custom({
//        type: "mekanism:injecting",
//        item_input: stagedWaferInput(5, "Step 5: Inject Phosphorus"),
//        chemical_input: {
//            chemical: "mekanism:phosphorus",
//            amount: 1
//        },
//        output: {
//            id: FINAL,
//            count: 1
//        },
//        "per_tick_usage": true
//    })
})