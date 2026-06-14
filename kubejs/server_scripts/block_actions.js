// priority: 0

// ===============================
// CONVERSION CATALYST
// ===============================

const CONVERSIONS = {
    'createaddition:copper_wire': 'sgcommunity_pack:mosfet',
    'ae2:silicon': 'sgcommunity_pack:integrated_circuit',
}

BlockEvents.rightClicked(event => {
    if (event.block.id !== 'sgcommunity_pack:conversion_catalyst')
        return

    const player = event.player
    const heldItem = player.mainHandItem

    const result = CONVERSIONS[heldItem.id]

    if (!result)
        return

    heldItem.count--
    player.give(result)
})

// ===============================
// OREDICTIONIFICATOR AUTO TAGS
// ===============================

const OREDICTIONIFICATOR_FILTER_MERGE = '{filters:[{filter:"convert:mosfet",type:"oredictionificator_item_filter",selected:"sgcommunity_pack:mosfet"},{filter:"convert:ic",type:"oredictionificator_item_filter",selected:"sgcommunity_pack:integrated_circuit"},{filter:"convert:isotopic_oscillator",type:"oredictionificator_item_filter",selected:"sgcommunity_pack:isotopic_decay_oscillator"},{filter:"convert:computation_core",type:"oredictionificator_item_filter",selected:"sgcommunity_pack:computation_core"}]}'

BlockEvents.placed('mekanism:oredictionificator', event => {
    const { block, server } = event

    server.scheduleInTicks(1, () => {
        server.runCommandSilent(
            `data merge block ${block.x} ${block.y} ${block.z} ${OREDICTIONIFICATOR_FILTER_MERGE}`
        )
    })
})