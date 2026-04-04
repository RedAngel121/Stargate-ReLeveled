// INCOMPLETE
ServerEvents.recipes(event => {
    const INCOMPLETE = 'sgcommunity_pack:wafer_dough'
    const FINAL = 'sgcommunity_pack:wafer'
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
    event.recipes.create.mixing(stagedWaferOutput(2, "Step 2: Add Eggs and Vanilla"), [Ingredient.of("#c:butter/butter"), Ingredient.of("#c:sugar/sugar")])
    event.recipes.create.mixing(stagedWaferOutput(3, "Step 3: Mix in some Flour"), [Ingredient.of("#c:egg/egg"), Ingredient.of("#c:spices/vanilla"), Ingredient.of(stagedWaferInput(2, "Step 2: Add Eggs and Vanilla"))])
    event.recipes.create.mixing(stagedWaferOutput(4, "Step 4: Mix in some more Flour"), [Ingredient.of(stagedWaferInput(3, "Step 3: Mix in some Flour")), Ingredient.of("#c:flours/wheat")])
    event.recipes.create.mixing(stagedWaferOutput(5, "Step 5: Mix in Sodium Bicarbonate"), [Ingredient.of(stagedWaferInput(4, "Step 4: Mix in some more Flour")), Ingredient.of("#c:flours/wheat")])
    event.recipes.create.mixing(stagedWaferOutput(6, "Step 6: Bake"), [Ingredient.of(stagedWaferInput(5, "Step 5: Mix in Sodium Bicarbonate")), Ingredient.of("sgcommunity_pack:sodium_bicarbonate")])
    event.smoking(FINAL, stagedWaferInput(6, "Step 6: Bake"))
})