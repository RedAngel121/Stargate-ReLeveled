ServerEvents.recipes(event => {
    const INCOMPLETE = 'sgcommunity_pack:wafer_dough'

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
        type: "create:mixing",
        ingredients: [{ tag: "c:butter/butter" }, { tag: "c:sugar/sugar" }],
        results: [stagedWaferOutput(2, "Step 2: Add Eggs and Vanilla")]
    })

    event.custom({
        type: "create:mixing",
        ingredients: [{ tag: "c:egg/egg" }, { tag: "c:spices/vanilla" }, stagedWaferInput(2, "Step 2: Add Eggs and Vanilla")],
        results: [stagedWaferOutput(3, "Step 3: Mix in some Flour")]
    })

    event.custom({
        type: "create:mixing",
        ingredients: [{ tag: "c:flours/wheat" }, stagedWaferInput(3, "Step 3: Mix in some Flour")],
        results: [stagedWaferOutput(4, "Step 4: Mix in some more Flour")]
    })

    event.custom({
        type: "create:mixing",
        ingredients: [{ tag: "c:flours/wheat" }, stagedWaferInput(4, "Step 4: Mix in some more Flour")],
        results: [stagedWaferOutput(5, "Step 5: Mix in Sodium Bicarbonate")]
    })

    event.custom({
        type: "create:mixing",
        ingredients: [{ item: "sgcommunity_pack:sodium_bicarbonate" }, stagedWaferInput(5, "Step 5: Mix in Sodium Bicarbonate")],
        results: [stagedWaferOutput(6, "Step 6: Bake")]
    })

    event.custom({
        type: "minecraft:smoking",
        ingredient: stagedWaferInput(6, "Step 6: Bake"),
        result: { id: "sgcommunity_pack:wafer" }
    })
})