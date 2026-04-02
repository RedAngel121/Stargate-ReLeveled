// priority: 0
const Tags = {
    CIRCUIT: `sgcommunity_pack:circuit`,
    CIRCUIT_BASIC: `sgcommunity_pack:circuit_basic`,
    CIRCUIT_INTERMEDIATE: `sgcommunity_pack:circuit_intermediate`,
    CIRCUIT_ADVANCED: `sgcommunity_pack:circuit_advanced`,
    CONVERT_MOSFET: "convert:mosfet",
    CONVERT_IC: "convert:ic",
    CONVERT_COMPUTATION_CORE: "convert:computation_core",
    CONVERT_ISO: "convert:isotopic_oscillator"
}

const ITEMS = [
    {
        id: "incomplete_vacuum_tube",
        name: "Incomplete Vacuum Tube",
        type: "create:sequenced_assembly"
    },
    {
        id: "vacuum_tube",
        name: "Vacuum Tube",
        tags: [Tags.CIRCUIT_BASIC, Tags.CIRCUIT]
    },
    { id: "glass_tube", name: "Glass Tube" },
    { id: "silica_dust", name: "Silica Dust" },
    { id: "silica_dust_bucket", name: "Silica Dust Bucket", stack: 1 },
    { id: "sand_mold", name: "Sand Mold" },
    { id: "iron_spool", name: "Iron Spool" },

    {
        id: "incomplete_washed_silica_dust",
        name: "Incomplete Washed Silica Dust",
        type: "create:sequenced_assembly"
    },
    { id: "washed_silica_dust", name: "Washed Silica Dust" },
    { id: "impure_quartz_glass", name: "Impure Quartz Glass" },
    { id: "pure_quartz_glass", name: "Pure Quartz Glass" },

    { id: "advanced_pcb_substrate", name: "PCB Substrate" },

    { id: "phosphorus", name: "Phosphorus", tags: ["c:phosphorus"] },

    { id: "alu", name: "ALU" },
    { id: "incomplete_alu", name: "Incomplete ALU", type: "create:sequenced_assembly" },
    { id: "control_unit", name: "Control Unit" },
    { id: "incomplete_control_unit", name: "Incomplete Control Unit", type: "create:sequenced_assembly" },

    {
        id: "rudimentary_processor",
        name: "Rudimentary Processor",
        tags: [Tags.CIRCUIT_INTERMEDIATE, Tags.CIRCUIT]
    },

    { id: "integrated_circuit_photomask", name: "Integrated Circuit Photomask" },
    { id: "edible_processor_photomask", name: "Edible Processor Photomask" },
    { id: "isotopic_decay_oscillator_photomask", name: "Isotopic Decay Oscillator Photomask" },

    { id: "silicon_boule", name: "Silicon Boule" },
    { id: "silicon_wafer", name: "Silicon Wafer" },
    { id: "incomplete_mosfet_wafer", name: "Incomplete MOSFET Wafer" },
    { id: "mosfet_wafer", name: "MOSFET Wafer" },
    { id: "mosfet_chip", name: "MOSFET Chip" },

    {
        id: "mosfet",
        name: "MOSFET",
        tags: [Tags.CIRCUIT_BASIC, Tags.CIRCUIT, Tags.CONVERT_MOSFET]
    },

    { id: "incomplete_integrated_circuit_wafer", name: "Incomplete Integrated Circuit Wafer" },
    { id: "integrated_circuit_wafer", name: "Integrated Circuit Wafer" },
    { id: "integrated_circuit_chip", name: "Integrated Circuit Chip" },

    {
        id: "integrated_circuit",
        name: "Integrated Circuit",
        tags: [Tags.CIRCUIT_INTERMEDIATE, Tags.CIRCUIT, Tags.CONVERT_IC]
    },

    { id: "kelp_ash", name: "Kelp Ash" },
    { id: "sodium_bicarbonate", name: "Baking Soda" },
    { id: "wafer_dough", name: "Wafer Dough" },

    {
        id: "wafer",
        name: "Wafer",
        food: food => food.nutrition(5).saturation(1)
    },
    {
        id: "incomplete_edible_processor_wafer",
        name: "Incomplete Edible Processor Wafer",
        food: food => food.nutrition(5).saturation(1)
    },
    {
        id: "edible_processor_wafer",
        name: "Edible Processor Wafer",
        food: food => food.nutrition(10).saturation(3)
    },
    {
        id: "edible_processor_chip",
        name: "Edible Processor Chip",
        food: food => food.nutrition(5).saturation(2)
    },
    {
        id: "edible_processor",
        name: "Edible Processor",
        food: food => food.nutrition(9).saturation(2)
    },

    { id: "uranium_wafer", name: "Uranium Wafer" },
    { id: "incomplete_isotopic_decay_oscillator_wafer", name: "Incomplete Isotopic Decay Oscillator Wafer" },
    { id: "isotopic_decay_oscillator_wafer", name: "Isotopic Decay Oscillator Wafer" },
    { id: "isotopic_decay_oscillator_chip", name: "Isotopic Decay Oscillator Chip" },

    {
        id: "isotopic_decay_oscillator",
        name: "Isotopic Decay Oscillator",
        tags: [Tags.CONVERT_ISO]
    },

    {
        id: "computation_core",
        name: "Computation Core",
        tags: [Tags.CIRCUIT_ADVANCED, Tags.CIRCUIT, Tags.CONVERT_COMPUTATION_CORE]
    },

    { id: "computation_core_frame", name: "Computation Core Frame" },
    { id: "rocket_control_unit", name: "Rocket Control Unit" }
]

StartupEvents.registry("item", event => {
    ITEMS.forEach(item => {
        let builder = item.type
            ? event.create(`sgcommunity_pack:${item.id}`, item.type)
            : event.create(`sgcommunity_pack:${item.id}`)

        if (item.name) builder.displayName(item.name)
        if (item.stack) builder.maxStackSize(item.stack)
        if (item.food) builder.food(item.food)

        if (item.tags) {
            item.tags.forEach(tag => builder.tag(tag))
        }
    })
})

// World Edit and FLAN items
StartupEvents.registry("item", event => {
    event.create('sgcommunity_pack:region_inspection_stick')
        .displayName('Region Inspection Stick')
        .texture('sgcommunity_pack:item/jaja_wand');
    event.create('sgcommunity_pack:region_claiming_stick')
        .displayName('Region Claiming Stick')
        .texture('sgcommunity_pack:item/jaja_flag');
    event.create('sgcommunity_pack:we_wand')
        .displayName('World Edit Wand')
        .texture('minecraft:item/stick');
    event.create('sgcommunity_pack:we_jump_stick')
        .displayName('World Edit Jump Stick')
        .texture('minecraft:item/stick');
    event.create('sgcommunity_pack:we_brush')
        .displayName('World Edit Brush')
        .texture('minecraft:item/brush');
});
