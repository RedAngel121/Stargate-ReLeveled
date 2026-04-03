ServerEvents.recipes(event => {

  const WAFER = 'sgcommunity_pack:incomplete_mosfet_wafer'

  function wafer(step, text) {
    let stack = Item.of(WAFER)

    // attach modern components (1.21.1 system)
    stack = stack.withComponent("minecraft:custom_data", { step: step })

    if (text) {
      stack = stack.withComponent("minecraft:lore", [text])
    }

    return stack
  }

  // Step 1 → Step 2
  event.recipes.mekanism.injecting(
    wafer(2, "Step 2: Inject Water Vapor (2000mb)"),
    "sgcommunity_pack:silicon_wafer",
    Chemical.of("mekanism:silicon", 1)
  )

  // Step 2 → Step 3
  event.recipes.mekanism.injecting(
    wafer(3, "Step 3: Etch Wafer"),
    wafer(2, "Step 2: Inject Water Vapor (2000mb)"),
    Chemical.ofTag("mekanism:water_vapor", 2000)
  )

  // Step 3 → Step 4
  event.recipes.mekanism.injecting(
    wafer(4, "Step 4: Inject Boron"),
    wafer(3, "Step 3: Etch Wafer"),
    Chemical.of("mekanism:hydrofluoric_acid", 400)
  )

  // Step 4 → Step 5
  event.recipes.mekanism.injecting(
    wafer(5, "Step 5: Inject Phosphorus"),
    wafer(4, "Step 4: Inject Boron"),
    Chemical.of("mekanism:boron_trifluoride", 400)
  )

  // Step 5 → Final
  event.recipes.mekanism.injecting(
    "sgcommunity_pack:mosfet_wafer",
    wafer(5, "Step 5: Inject Phosphorus"),
    Chemical.of("mekanism:phosphorus", 200)
  )

})