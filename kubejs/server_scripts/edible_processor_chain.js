// INCOMPLETE
ServerEvents.recipes(event => {
    const START = 'sgcommunity_pack:wafer'
    const INCOMPLETE = 'sgcommunity_pack:incomplete_edible_processor_wafer'
    const FINAL = 'sgcommunity_pack:edible_processor_wafer'
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
    event.recipes.create.mixing(stagedWaferOutput(3, "Step 3: Harden Syrup"), [Ingredient.of(stagedWaferInput(2, "Step 2: Mix With Maple Syrup")), Ingredient.of("pamhc2trees:maplesyrupitem")])
    AE2Recipes.inscriber(event,
        'inscribe',
        stagedWaferInput(3, "Step 3: Harden Syrup"),
        "sgcommunity_pack:edible_processor_photomask",
        stagedWaferOutput(4, "Step 4: Etch Wafer"),
    )


    event.recipes.create.mixing(stagedWaferOutput(6, "Step 6: Harden Syrup"), [Ingredient.of(stagedWaferInput(5, "Step 5: Mix With Maple Syrup")), Ingredient.of("pamhc2trees:maplesyrupitem")])
    AE2Recipes.inscriber(event,
        'inscribe',
        stagedWaferInput(6, "Step 6: Harden Syrup"),
        "sgcommunity_pack:edible_processor_photomask",
        stagedWaferOutput(7, "Step 7: Etch Wafer"),
    )


    event.recipes.create.mixing(stagedWaferOutput(9, "Step 9: Harden Syrup"), [Ingredient.of(stagedWaferInput(8, "Step 8: Mix With Maple Syrup")), Ingredient.of("pamhc2trees:maplesyrupitem")])
    AE2Recipes.inscriber(event,
        'inscribe',
        stagedWaferInput(9, "Step 9: Harden Syrup"),
        "sgcommunity_pack:edible_processor_photomask",
        stagedWaferOutput(10, "Step 10: Etch Wafer"),
    )


    event.smoking(FINAL, stagedWaferInput(12, "Step 12: Caramelize Sugar"))
})