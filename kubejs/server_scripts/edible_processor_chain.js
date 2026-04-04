ServerEvents.recipes(event => {
    const START = 'sgcommunity_pack:wafer'
    const INCOMPLETE = 'sgcommunity_pack:incomplete_edible_processor_wafer'
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

    event.recipes.create.filling(stagedWaferOutput(2, "Step 2: Mix With Maple Syrup"), [Fluid.of('500x create:honey'), START])

    event.custom({
        type: "create:mixing",
        ingredients: [{ tag: "c:crops/maple" }, stagedWaferInput(2, "Step 2: Mix With Maple Syrup")],
        results: [stagedWaferOutput(3, "Step 3: Harden Syrup")]
    })

    AE2Recipes.inscriber(event,
        'inscribe',
        stagedWaferInput(3, "Step 3: Harden Syrup"),
        "sgcommunity_pack:edible_processor_photomask",
        stagedWaferOutput(4, "Step 4: Etch Wafer with Milk"),
    )

    event.custom({
        type: "create:filling",
        ingredients: [{ "type": "neoforge:single", "amount": 1000, fluid: "minecraft:milk" }, stagedWaferInput(4, "Step 4: Etch Wafer with Milk")],
        results: [stagedWaferOutput(5, "Step 5: Mix With Maple Syrup")]
    })

    event.custom({
        type: "create:mixing",
        ingredients: [{ tag: "c:crops/maple" }, stagedWaferInput(5, "Step 5: Mix With Maple Syrup")],
        results: [stagedWaferOutput(6, "Step 6: Harden Syrup")]
    })

    AE2Recipes.inscriber(event,
        'inscribe',
        stagedWaferInput(6, "Step 6: Harden Syrup"),
        "sgcommunity_pack:edible_processor_photomask",
        stagedWaferOutput(7, "Step 7: Apply Chocolate"),
    )

    event.custom({
        type: "create:filling",
        ingredients: [{ "type": "neoforge:single", "amount": 500, fluid: "create:chocolate" }, stagedWaferInput(7, "Step 7: Apply Chocolate")],
        results: [stagedWaferOutput(8, "Step 8: Mix With Maple Syrup")]
    })

    event.custom({
        type: "create:mixing",
        ingredients: [{ tag: "c:crops/maple" }, stagedWaferInput(8, "Step 8: Mix With Maple Syrup")],
        results: [stagedWaferOutput(9, "Step 9: Harden Syrup")]
    })

    AE2Recipes.inscriber(event,
        'inscribe',
        stagedWaferInput(9, "Step 9: Harden Syrup"),
        "sgcommunity_pack:edible_processor_photomask",
        stagedWaferOutput(10, "Step 10: Etch Wafer with Milk"),
    )

    event.custom({
        type: "create:filling",
        ingredients: [{ "type": "neoforge:single", "amount": 1000, fluid: "minecraft:milk" }, stagedWaferInput(10, "Step 10: Etch Wafer with Milk")],
        results: [stagedWaferOutput(11, "Step 11: Sprinkle Sugar")]
    })

    event.custom({
        type: "create:deploying",
        ingredients: [{ tag: "c:sugar/sugar" }, stagedWaferInput(11, "Step 11: Sprinkle Sugar")],
        results: [stagedWaferOutput(12, "Step 12: Caramelize Sugar")]
    })

    event.custom({
        type: "minecraft:smoking",
        ingredient: stagedWaferInput(12, "Step 12: Caramelize Sugar"),
        result: { id: "sgcommunity_pack:edible_processor_wafer" }
    })

})