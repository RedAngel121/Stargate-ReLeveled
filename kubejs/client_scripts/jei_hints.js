RecipeViewerEvents.addInformation('item', event => {
    event.add('mekanism:oredictionificator', [
        'This pack automatically presets the Oredictionificator when placed.',
        '',
        'Preset conversions:',
        'Redstone Dust -> MOSFET',
        'Any Osmium Ingot -> Integrated Circuit',
        'Any Uranium Ingot -> Isotopic Decay Oscillator',
        'Advanced Control Circuit -> Computation Core'
    ])

    event.add('sgcommunity_pack:mosfet', [
        'Oredictionificator preset conversion:',
        '',
        'Redstone Dust -> MOSFET',
        '',
        'Place an Oredictionificator. It is automatically preset by KubeJS.'
    ])

    event.add('sgcommunity_pack:integrated_circuit', [
        'Oredictionificator preset conversion:',
        '',
        'Any Osmium Ingot -> Integrated Circuit',
        '',
        'Place an Oredictionificator. It is automatically preset by KubeJS.'
    ])

    event.add('sgcommunity_pack:isotopic_decay_oscillator', [
        'Oredictionificator preset conversion:',
        '',
        'Any Uranium Ingot -> Isotopic Decay Oscillator',
        '',
        'Place an Oredictionificator. It is automatically preset by KubeJS.'
    ])

    event.add('sgcommunity_pack:computation_core', [
        'Oredictionificator preset conversion:',
        '',
        'Advanced Control Circuit -> Computation Core',
        '',
        'Place an Oredictionificator. It is automatically preset by KubeJS.'
    ])

    event.add('minecraft:redstone', [
        'Oredictionificator preset usage:',
        '',
        'Redstone Dust -> MOSFET'
    ])

    event.add('#c:ingots/osmium', [
        'Oredictionificator preset usage:',
        '',
        'Any Osmium Ingot -> Integrated Circuit'
    ])

    event.add('#c:ingots/uranium', [
        'Oredictionificator preset usage:',
        '',
        'Any Uranium Ingot -> Isotopic Decay Oscillator'
    ])

    event.add('mekanism:advanced_control_circuit', [
        'Oredictionificator preset usage:',
        '',
        'Advanced Control Circuit -> Computation Core'
    ])
    event.add('sgcommunity_pack:conversion_catalyst', [
        'Right-click the Conversion Catalyst while holding a valid input item.',
        '',
        'Catalyst conversions:',
        'Copper Wire -> MOSFET',
        'AE2 Silicon -> Integrated Circuit'
    ])

    event.add('sgcommunity_pack:mosfet', [
        'Conversion Catalyst recipe:',
        '',
        'Right-click a Conversion Catalyst while holding:',
        'Create Crafts & Additions Copper Wire',
        '',
        'Result:',
        'MOSFET'
    ])

    event.add('sgcommunity_pack:integrated_circuit', [
        'Conversion Catalyst recipe:',
        '',
        'Right-click a Conversion Catalyst while holding:',
        'AE2 Silicon',
        '',
        'Result:',
        'Integrated Circuit'
    ])

    event.add('createaddition:copper_wire', [
        'Conversion Catalyst usage:',
        '',
        'Right-click a Conversion Catalyst with Copper Wire.',
        '',
        'Result: MOSFET'
    ])

    event.add('ae2:silicon', [
        'Conversion Catalyst usage:',
        '',
        'Right-click a Conversion Catalyst with AE2 Silicon.',
        '',
        'Result: Integrated Circuit'
    ])
})