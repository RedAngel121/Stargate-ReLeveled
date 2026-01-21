// Remove Unwanted Recipes
ServerEvents.recipes(event => {
    let recipes = [
        "minecraft:chain"
    ]
    for (let ID of recipes) {
        event.remove({ id: ID })
    }
})