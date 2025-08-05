// priority: 10
var _class, _class2, _class3, _class4, _class5, _class6;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// This file is automatically shared amongst the server and startup scripts
var MODID = "sgcommunity_pack";
var Tags = {
  CIRCUIT: MODID + ":circuit",
  CIRCUIT_BASIC: MODID + ":circuit_basic",
  CIRCUIT_INTERMEDIATE: MODID + ":circuit_intermediate",
  CIRCUIT_ADVANCED: MODID + ":circuit_advanced",
  CONVERT_MOSFET: "convert:mosfet",
  CONVERT_IC: "convert:ic",
  CONVERT_COMPUTATION_CORE: "convert:computation_core",
  CONVERT_ISO: "convert:isotopic_oscillator"
};
let Substrate = /*#__PURE__*/function () {
  "use strict";

  function Substrate(identifier, name, builderOptions) {
    _classCallCheck(this, Substrate);
    this.name = name;
    this.identifier = identifier;
    this.builderOptions = builderOptions !== null && builderOptions !== void 0 ? builderOptions : {};
  }
  _createClass(Substrate, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getIdentifier",
    value: function getIdentifier() {
      return MODID + ":" + this.identifier;
    }
  }]);
  return Substrate;
}();
_class = Substrate;
_defineProperty(Substrate, "IRON", new _class("iron_substrate", "Iron Substrate"));
_defineProperty(Substrate, "GOLD", new _class("gold_substrate", "Gold Substrate"));
_defineProperty(Substrate, "DIAMOND", new _class("diamond_substrate", "Diamond Substrate"));
_defineProperty(Substrate, "NETHERITE", new _class("netherite_substrate", "Netherite Substrate"));
_defineProperty(Substrate, "KINETIC", new _class("kinetic_substrate", "Kinetic Substrate"));
_defineProperty(Substrate, "COMPUTATIONAL", new _class("computational_substrate", "Computational Substrate", {
  lightLevel: 0.5
}));
_defineProperty(Substrate, "MEKANISED", new _class("mekanised_substrate", "Mekanised Substrate"));
_defineProperty(Substrate, "REACTIVE", new _class("reactive_substrate", "Reactive Substrate"));
_defineProperty(Substrate, "DEEP_SPACE", new _class("deep_space_substrate", "Deep Space Substrate"));
_defineProperty(Substrate, "NAQUADRIA", new _class("naquadria_substrate", "Naquadria Substrate", {
  lightLevel: 1
}));
_defineProperty(Substrate, "POSITRONIC", new _class("positronic_substrate", "Positronic Substrate", {
  lightLevel: 1,
  renderType: "translucent"
}));
let Item = /*#__PURE__*/function () {
  "use strict";

  function Item(identifier, name, builderOptions) {
    var _this$builderOptions, _this$builderOptions$;
    _classCallCheck(this, Item);
    this.name = name;
    this.identifier = identifier;
    this.builderOptions = builderOptions !== null && builderOptions !== void 0 ? builderOptions : {};
    (_this$builderOptions$ = (_this$builderOptions = this.builderOptions).tags) !== null && _this$builderOptions$ !== void 0 ? _this$builderOptions$ : _this$builderOptions.tags = [];
  }
  _createClass(Item, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getIdentifier",
    value: function getIdentifier() {
      return MODID + ":" + this.identifier;
    }
  }], [{
    key: "of",
    value: function of(item) {
      let count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (item instanceof Item) {
        item = item.getIdentifier();
      } else if (item instanceof Substrate) {
        item = item.getIdentifier();
      } else if (typeof item == "object") {
        return {
          item: item.item,
          count: count
        };
      }
      return {
        item: item,
        count: count
      };
    }
  }]);
  return Item;
}();
_class2 = Item;
// Vacuum Tube
_defineProperty(Item, "INCOMPLETE_VACUUM_TUBE", new _class2("incomplete_vacuum_tube", "Incomplete Vacuum Tube", {
  itemType: "create:sequenced_assembly"
}));
_defineProperty(Item, "VACUUM_TUBE", new _class2("vacuum_tube", "Vacuum Tube", {
  tags: [Tags.CIRCUIT_BASIC, Tags.CIRCUIT]
}));
_defineProperty(Item, "GLASS_TUBE", new _class2("glass_tube", "Glass Tube"));
_defineProperty(Item, "SILICA_DUST", new _class2("silica_dust", "Silica Dust"));
_defineProperty(Item, "SILICA_DUST_BUCKET", new _class2("silica_dust_bucket", "Silica Dust Bucket", {
  stackSize: 1
}));
_defineProperty(Item, "SAND_MOLD", new _class2("sand_mold", "Sand Mold"));
_defineProperty(Item, "IRON_FILAMENT", new _class2("iron_filament", "Iron Filament"));
// Pure quartz glass
_defineProperty(Item, "INCOMPLETE_SILICA_DUST", new _class2("incomplete_washed_silica_dust", "Incomplete Washed Silica Dust", {
  itemType: "create:sequenced_assembly"
}));
_defineProperty(Item, "WASHED_SILICA_DUST", new _class2("washed_silica_dust", "Washed Silica Dust"));
_defineProperty(Item, "IMPURE_QUARTZ_GLASS", new _class2("impure_quartz_glass", "Impure Quartz Glass"));
_defineProperty(Item, "PURE_QUARTZ_GLASS", new _class2("pure_quartz_glass", "Pure Quartz Glass"));
// PCB Substrate
// static PCB_SUBSTRATE = new Item("pcb_substrate", "PCB Substrate")
_defineProperty(Item, "ADVANCED_PCB_SUBSTRATE", new _class2("advanced_pcb_substrate", "PCB Substrate"));
// Silicon Wafers
_defineProperty(Item, "PHOSPHORUS", new _class2("phosphorus", "Phosphorus", {
  tags: ["forge:phosphorus"]
}));
// Rudimentary Processor
// static ADDER = new Item("adder", "8 Bit Adder")
// static INCOMPLETE_ADDER = new Item("incomplete_adder", "Incomplete 8 Bit Adder", { itemType: "create:sequenced_assembly"})
// static XOR = new Item("xor", "8 Bit XOR")
// static INCOMPLETE_XOR = new Item("incomplete_xor", "Incomplete 8 Bit XOR", { itemType: "create:sequenced_assembly"})
// static RSHIFT = new Item("rshift", "8 Bit RShift")
// static INCOMPLETE_RSHIFT = new Item("incomplete_rshift", "Incomplete 8 Bit RShift", { itemType: "create:sequenced_assembly"})
_defineProperty(Item, "ALU", new _class2("alu", "ALU"));
_defineProperty(Item, "INCOMPLETE_ALU", new _class2("incomplete_alu", "Incomplete ALU", {
  itemType: "create:sequenced_assembly"
}));
_defineProperty(Item, "CONTROL_UNIT", new _class2("control_unit", "Control Unit"));
_defineProperty(Item, "INCOMPLETE_CONTROL_UNIT", new _class2("incomplete_control_unit", "Incomplete Control Unit", {
  itemType: "create:sequenced_assembly"
}));
// static SMALL_CACHE = new Item("small_cache", "Small Cache")
// static INCOMPLETE_SMALL_CACHE = new Item("incomplete_small_cache", "Incomplete Small Cache", { itemType: "create:sequenced_assembly"})
_defineProperty(Item, "RUDIMENTARY_PROCESSOR", new _class2("rudimentary_processor", "Rudimentary Processor", {
  tags: [Tags.CIRCUIT_INTERMEDIATE, Tags.CIRCUIT]
}));
// Photomasks
//static FET_PHOTOMASK = new Item("mosfet_photomask", "MOSFET Photomask")
_defineProperty(Item, "IC_PHOTOMASK", new _class2("integrated_circuit_photomask", "Integrated Circuit Photomask"));
_defineProperty(Item, "EP_PHOTOMASK", new _class2("edible_processor_photomask", "Edible Processor Photomask"));
_defineProperty(Item, "ISO_PHOTOMASK", new _class2("isotopic_decay_oscillator_photomask", "Isotopic Decay Oscillator Photomask"));
// Mekanism Era Tier I
_defineProperty(Item, "SILICON_BOULE", new _class2("silicon_boule", "Silicon Boule"));
_defineProperty(Item, "SILICON_WAFER", new _class2("silicon_wafer", "Silicon Wafer"));
_defineProperty(Item, "INCOMPLETE_MOSFET_WAFER", new _class2("incomplete_mosfet_wafer", "Incomplete MOSFET Wafer"));
_defineProperty(Item, "MOSFET_WAFER", new _class2("mosfet_wafer", "MOSFET Wafer"));
_defineProperty(Item, "MOSFET_CHIP", new _class2("mosfet_chip", "MOSFET Chip"));
_defineProperty(Item, "MOSFET", new _class2("mosfet", "MOSFET", {
  tags: [Tags.CIRCUIT_BASIC, Tags.CIRCUIT, Tags.CONVERT_MOSFET]
}));
// Mekanism Era Tier II
_defineProperty(Item, "INCOMPLETE_IC", new _class2("incomplete_integrated_circuit_wafer", "Incomplete Integrated Circuit Wafer"));
_defineProperty(Item, "INTEGRATED_CIRCUIT_WAFER", new _class2("integrated_circuit_wafer", "Integrated Circuit Wafer"));
_defineProperty(Item, "INTEGRATED_CIRCUIT_CHIP", new _class2("integrated_circuit_chip", "Integrated Circuit Chip"));
_defineProperty(Item, "INTEGRATED_CIRCUIT", new _class2("integrated_circuit", "Integrated Circuit", {
  tags: [Tags.CIRCUIT_INTERMEDIATE, Tags.CIRCUIT, Tags.CONVERT_IC]
}));
//====MEKANISM ERA TIER III===\\
// Edible Processor
_defineProperty(Item, "KELP_ASH", new _class2("kelp_ash", "Kelp Ash"));
_defineProperty(Item, "SODIUM_BICARBONATE", new _class2("sodium_bicarbonate", "Baking Soda"));
_defineProperty(Item, "WAFER_DOUGH", new _class2("wafer_dough", "Wafer Dough"));
_defineProperty(Item, "WAFER", new _class2("wafer", "Wafer", {
  food: foodBuilder => {
    foodBuilder.hunger(5).saturation(1);
  }
}));
_defineProperty(Item, "INCOMPLETE_EDIBLE_PROCESSOR_WAFER", new _class2("incomplete_edible_processor_wafer", "Incomplete Edible Processor Wafer", {
  food: foodBuilder => {
    foodBuilder.hunger(5).saturation(1);
  }
}));
_defineProperty(Item, "EDIBLE_PROCESSOR_WAFER", new _class2("edible_processor_wafer", "Edible Processor Wafer", {
  food: foodBuilder => {
    foodBuilder.hunger(10).saturation(3);
  }
}));
_defineProperty(Item, "EDIBLE_PROCESSOR_CHIP", new _class2("edible_processor_chip", "Edible Processor Chip", {
  food: foodBuilder => {
    foodBuilder.hunger(5).saturation(2);
  }
}));
_defineProperty(Item, "EDIBLE_PROCESSOR", new _class2("edible_processor", "Edible Processor", {
  food: foodBuilder => {
    foodBuilder.hunger(9).saturation(2);
  }
}));
// Isotopic Decay Oscillator (terrible name)
_defineProperty(Item, "URANIUM_WAFER", new _class2("uranium_wafer", "Uranium Wafer"));
_defineProperty(Item, "INCOMPLETE_ISOTOPIC_DECAY_OSCILLATOR_WAFER", new _class2("incomplete_isotopic_decay_oscillator_wafer", "Incomplete Isotopic Decay Oscillator Wafer"));
_defineProperty(Item, "ISOTOPIC_DECAY_OSCILLATOR_WAFER", new _class2("isotopic_decay_oscillator_wafer", "Isotopic Decay Oscillator Wafer"));
_defineProperty(Item, "ISOTOPIC_DECAY_OSCILLATOR_CHIP", new _class2("isotopic_decay_oscillator_chip", "Isotopic Decay Oscillator Chip"));
_defineProperty(Item, "ISOTOPIC_DECAY_OSCILLATOR", new _class2("isotopic_decay_oscillator", "Isotopic Decay Oscillator", {
  tags: [Tags.CONVERT_ISO]
}));
// RAM Stick (read: RESOURCE AMPLIFICATION and MULTIPLICATION stick)
// static RAM_PHOTOMASK = new Item("ram_module_photomask", "RAM Module Photomask")
// static INCOMPLETE_RAM_MODULE_WAFER = new Item("incomplete_ram_module_wafer","Incomplete RAM Module Wafer")
// static RAM_MODULE_WAFER = new Item("ram_module_wafer","RAM Module Wafer")
// static RAM_MODULE_CHIP = new Item("ram_module_chip","RAM Module Chip")
// static RAM_MODULE = new Item("ram_module","RAM Module")
// static RAM_PCB = new Item("ram_pcb","RAM PCB")
// static RAM_STICK = new Item("ram_stick","RAM Stick")
// Computation Processor (totally not an excuse for resource multiplication)
// static COMPUTATION_PROCESSOR_PHOTOMASK = new Item("computation_processor_photomask", "Computation Processor Photomask")
// static INCOMPLETE_COMPUTATION_PROCESSOR = new Item("incomplete_computation_processor_wafer", "Incomplete Computation Processor Wafer")
// static COMPUTATION_PROCESSOR_WAFER = new Item("computation_processor_wafer", "Computation Processor Wafer")
// static COMPUTATION_PROCESSOR_CHIP = new Item("computation_processor_chip", "Computation Processor Chip")
// static COMPUTATION_PROCESSOR = new Item("computation_processor", "Computation Processor")
// Computation Core
_defineProperty(Item, "COMPUTATION_CORE", new _class2("computation_core", "Computation Core", {
  tags: [Tags.CIRCUIT_ADVANCED, Tags.CIRCUIT, Tags.CONVERT_COMPUTATION_CORE]
}));
_defineProperty(Item, "COMPUTATION_CORE_FRAME", new _class2("computation_core_frame", "Computation Core Frame"));
// Ad Astra
_defineProperty(Item, "RCU", new _class2("rocket_control_unit", "Rocket Control Unit"));
let Fluid = /*#__PURE__*/function () {
  "use strict";

  function Fluid() {
    _classCallCheck(this, Fluid);
  }
  _createClass(Fluid, null, [{
    key: "toBucket",
    value: function toBucket(fluid) {
      if (typeof fluid == "string") {
        return {
          "fluid": fluid,
          "amount": 1000
        };
      } else {
        fluid.amount = 1000;
        return fluid;
      }
    }
  }, {
    key: "toAmount",
    value: function toAmount(fluid, amount) {
      if (typeof fluid == "string") {
        return {
          "fluid": fluid,
          "amount": amount
        };
      } else {
        fluid.amount = amount;
        return fluid;
      }
    }
  }]);
  return Fluid;
}();
let Tier = /*#__PURE__*/_createClass(function Tier(substrate, materials) {
  "use strict";

  _classCallCheck(this, Tier);
  this.substrate = substrate;
  this.materials = materials;
});
_class3 = Tier;
_defineProperty(Tier, "IRON", new _class3(Substrate.IRON, {
  coal: 1,
  copper: 1,
  iron: 1,
  amethyst: 1
}));
_defineProperty(Tier, "GOLD", new _class3(Substrate.GOLD, {
  coal: 2,
  copper: 2,
  iron: 2,
  amethyst: 2,
  gold: 1,
  zinc: 1
}));
_defineProperty(Tier, "DIAMOND", new _class3(Substrate.DIAMOND, {
  coal: 2,
  copper: 2,
  iron: 2,
  amethyst: 2,
  gold: 2,
  zinc: 1,
  diamond: 0.5,
  lapis: 0.5,
  redstone: 0.5
}));
// All tiers after this require the previous tier to craft
_defineProperty(Tier, "NETHERITE", new _class3(Substrate.NETHERITE, {
  coal: 4,
  copper: 4,
  iron: 2,
  amethyst: 2,
  gold: 2,
  zinc: 2,
  diamond: 1,
  ancient_debris: 0.5,
  lapis: 1,
  redstone: 1,
  emerald: 0.5
}));
_defineProperty(Tier, "KINETIC", new _class3(Substrate.KINETIC, {
  coal: 4,
  copper: 4,
  iron: 4,
  amethyst: 4,
  gold: 2,
  zinc: 2,
  diamond: 2,
  ancient_debris: 1,
  lapis: 2,
  redstone: 2,
  emerald: 1,
  certus: 1,
  nether_quartz: 1,
  glowstone: 1
}));
_defineProperty(Tier, "COMPUTATIONAL", new _class3(Substrate.COMPUTATIONAL, {
  coal: 4,
  iron: 4,
  amethyst: 4,
  gold: 4,
  zinc: 2,
  diamond: 3,
  ancient_debris: 1,
  lapis: 3,
  redstone: 3,
  emerald: 1,
  certus: 2,
  nether_quartz: 2,
  glowstone: 2
}));
// Now we begin the hard tiers (e.g., the substrate made with osmium doesn't give osmium)
_defineProperty(Tier, "MEKANISED", new _class3(Substrate.MEKANISED, {
  coal: 4,
  copper: 4,
  iron: 4,
  amethyst: 4,
  gold: 4,
  zinc: 4,
  diamond: 4,
  ancient_debris: 2,
  lapis: 4,
  redstone: 4,
  emerald: 2,
  certus: 2,
  nether_quartz: 2,
  glowstone: 2,
  fluix: 1
}));
_defineProperty(Tier, "REACTIVE", new _class3(Substrate.REACTIVE, {
  coal: 4,
  copper: 4,
  iron: 4,
  amethyst: 4,
  gold: 4,
  zinc: 4,
  diamond: 4,
  ancient_debris: 4,
  lapis: 4,
  redstone: 4,
  emerald: 2,
  certus: 3,
  nether_quartz: 3,
  glowstone: 3,
  fluix: 1,
  osmium: 1,
  desh: 1
}));
_defineProperty(Tier, "DEEP_SPACE", new _class3(Substrate.DEEP_SPACE, {
  coal: 4,
  copper: 4,
  iron: 4,
  amethyst: 4,
  gold: 4,
  zinc: 4,
  diamond: 4,
  ancient_debris: 4,
  lapis: 4,
  redstone: 4,
  emerald: 4,
  certus: 4,
  nether_quartz: 4,
  glowstone: 4,
  fluix: 2,
  osmium: 2,
  desh: 2,
  tin: 1,
  lead: 1,
  borax: 1,
  ostrum: 1
}));
_defineProperty(Tier, "NAQUADRIA", new _class3(Substrate.NAQUADRIA, {
  coal: 8,
  copper: 8,
  iron: 8,
  amethyst: 8,
  gold: 4,
  zinc: 4,
  diamond: 4,
  ancient_debris: 4,
  lapis: 4,
  redstone: 8,
  emerald: 4,
  certus: 4,
  nether_quartz: 4,
  glowstone: 4,
  fluix: 4,
  osmium: 4,
  desh: 4,
  tin: 2,
  lead: 2,
  borax: 2,
  ostrum: 2,
  fluorine: 1,
  uranium: 1,
  calorite: 1
}));
_defineProperty(Tier, "POSITRONIC", new _class3(Substrate.POSITRONIC, {
  coal: 16,
  copper: 8,
  iron: 8,
  amethyst: 8,
  gold: 8,
  zinc: 8,
  diamond: 8,
  ancient_debris: 8,
  lapis: 8,
  redstone: 16,
  emerald: 4,
  certus: 8,
  nether_quartz: 8,
  glowstone: 8,
  fluix: 8,
  osmium: 8,
  desh: 8,
  tin: 4,
  lead: 4,
  borax: 3,
  ostrum: 4,
  fluorine: 4,
  uranium: 4,
  calorite: 4,
  naquadah: 2
}));
var Materials = {
  coal: {
    item: "minecraft:coal",
    display: "minecraft:coal_ore",
    drops: [{
      "item": "minecraft:coal",
      min: 2,
      max: 3
    }]
  },
  copper: {
    item: "minecraft:copper_ingot",
    display: "minecraft:copper_ore",
    drops: [{
      "item": "minecraft:raw_copper",
      min: 2,
      max: 3
    }]
  },
  iron: {
    item: "minecraft:iron_ingot",
    display: "minecraft:iron_ore",
    drops: [{
      "item": "minecraft:raw_iron",
      min: 2,
      max: 3
    }]
  },
  gold: {
    item: "minecraft:gold_ingot",
    display: "minecraft:gold_ore",
    drops: [{
      "item": "minecraft:raw_gold",
      min: 2,
      max: 3
    }]
  },
  zinc: {
    item: "create:zinc_ingot",
    display: "create:zinc_ore",
    drops: [{
      "item": "create:raw_zinc",
      min: 2,
      max: 3
    }]
  },
  amethyst: {
    item: "minecraft:amethyst_shard",
    display: "minecraft:amethyst_block",
    drops: [{
      "item": "minecraft:amethyst_shard",
      min: 4,
      max: 4
    }]
  },
  diamond: {
    item: "minecraft:diamond",
    display: "minecraft:diamond_ore",
    drops: [{
      "item": "minecraft:diamond",
      min: 2,
      max: 3
    }]
  },
  ancient_debris: {
    item: "minecraft:netherite_ingot",
    display: "minecraft:ancient_debris",
    drops: [{
      "item": "minecraft:ancient_debris",
      min: 2,
      max: 3
    }]
  },
  lapis: {
    item: "minecraft:lapis_lazuli",
    display: "minecraft:lapis_ore",
    drops: [{
      "item": "minecraft:lapis_lazuli",
      min: 2,
      max: 3
    }]
  },
  redstone: {
    item: "minecraft:redstone",
    display: "minecraft:redstone_ore",
    drops: [{
      "item": "minecraft:redstone",
      min: 2,
      max: 3
    }]
  },
  emerald: {
    item: "minecraft:emerald",
    display: "minecraft:emerald_ore",
    drops: [{
      "item": "minecraft:emerald",
      min: 2,
      max: 3
    }]
  },
  certus: {
    item: "ae2:charged_certus_quartz_crystal",
    display: "ae2:quartz_cluster",
    drops: [{
      "item": "ae2:certus_quartz_crystal",
      min: 2,
      max: 3
    }]
  },
  nether_quartz: {
    item: "minecraft:quartz",
    display: "minecraft:nether_quartz_ore",
    drops: [{
      "item": "minecraft:quartz",
      min: 2,
      max: 3
    }]
  },
  glowstone: {
    item: "minecraft:glowstone_dust",
    display: "minecraft:glowstone",
    drops: [{
      "item": "minecraft:glowstone_dust",
      min: 2,
      max: 3
    }]
  },
  fluix: {
    item: "ae2:fluix_crystal",
    display: "ae2:fluix_block",
    drops: [{
      "item": "ae2:fluix_crystal",
      min: 2,
      max: 3
    }]
  },
  osmium: {
    item: "mekanism:ingot_osmium",
    display: "mekanism:osmium_ore",
    drops: [{
      "item": "mekanism:raw_osmium",
      min: 2,
      max: 3
    }]
  },
  tin: {
    item: "mekanism:ingot_tin",
    display: "mekanism:tin_ore",
    drops: [{
      "item": "mekanism:raw_tin",
      min: 2,
      max: 3
    }]
  },
  lead: {
    item: "mekanism:ingot_lead",
    display: "mekanism:lead_ore",
    drops: [{
      "item": "mekanism:raw_lead",
      min: 2,
      max: 3
    }]
  },
  borax: {
    item: MODID + ":borax",
    display: MODID + ":borax",
    drops: [{
      "item": MODID + ":borax",
      min: 2,
      max: 3
    }]
  },
  fluorine: {
    item: "mekanism:fluorite_gem",
    display: "mekanism:fluorite_ore",
    drops: [{
      "item": "mekanism:fluorite_gem",
      min: 2,
      max: 3
    }]
  },
  uranium: {
    item: "mekanism:ingot_uranium",
    display: "mekanism:uranium_ore",
    drops: [{
      "item": "mekanism:raw_uranium",
      min: 2,
      max: 3
    }]
  },
  desh: {
    item: "ad_astra:desh_ingot",
    display: "ad_astra:moon_desh_ore",
    drops: [{
      "item": "ad_astra:raw_desh",
      min: 2,
      max: 3
    }]
  },
  ostrum: {
    item: "ad_astra:ostrum_ingot",
    display: "ad_astra:mars_ostrum_ore",
    drops: [{
      "item": "ad_astra:raw_ostrum",
      min: 2,
      max: 3
    }]
  },
  calorite: {
    item: "ad_astra:calorite_ingot",
    display: "ad_astra:venus_calorite_ore",
    drops: [{
      "item": "ad_astra:raw_calorite",
      min: 2,
      max: 3
    }]
  },
  naquadah: {
    item: "sgjourney:pure_naquadah",
    display: "sgjourney:naquadah_ore",
    drops: [{
      "item": "sgjourney:raw_naquadah",
      min: 2,
      max: 3
    }]
  }
};
let ToolType = /*#__PURE__*/function () {
  "use strict";

  function ToolType(identifier) {
    _classCallCheck(this, ToolType);
    this.identifier = identifier;
  }
  _createClass(ToolType, [{
    key: "getIdentifier",
    value: function getIdentifier() {
      return this.identifier;
    }
  }]);
  return ToolType;
}();
_class4 = ToolType;
_defineProperty(ToolType, "PICKAXE", new _class4("mineable/pickaxe"));
_defineProperty(ToolType, "SHOVEL", new _class4("mineable/shovel"));
let ToolTier = /*#__PURE__*/function () {
  "use strict";

  function ToolTier(identifier) {
    _classCallCheck(this, ToolTier);
    this.identifier = identifier;
  }
  _createClass(ToolTier, [{
    key: "getIdentifier",
    value: function getIdentifier() {
      return this.identifier;
    }
  }]);
  return ToolTier;
}();
_class5 = ToolTier;
_defineProperty(ToolTier, "IRON", new _class5("minecraft:needs_iron_tool"));
_defineProperty(ToolTier, "DIAMOND", new _class5("minecraft:needs_diamond_tool"));
let MaterialType = /*#__PURE__*/function () {
  "use strict";

  function MaterialType(sound, color) {
    _classCallCheck(this, MaterialType);
    this.sound = sound;
    this.color = color;
  }
  _createClass(MaterialType, [{
    key: "getSound",
    value: function getSound() {
      return this.sound;
    }
  }, {
    key: "getMapColor",
    value: function getMapColor() {
      return this.mapColor;
    }
  }]);
  return MaterialType;
}();
_class6 = MaterialType;
_defineProperty(MaterialType, "STONE", new _class6("stone", "stone"));
_defineProperty(MaterialType, "DIRT", new _class6("gravel", "dirt"));
_defineProperty(MaterialType, "METAL", new _class6("metal", "metal"));
let Block = /*#__PURE__*/function () {
  "use strict";

  function Block(identifier, name) {
    _classCallCheck(this, Block);
    _defineProperty(this, "_blockTags", []);
    _defineProperty(this, "_itemTags", []);
    _defineProperty(this, "_hardness", 1);
    _defineProperty(this, "_blastResistance", 1);
    _defineProperty(this, "_lightLevel", 0);
    _defineProperty(this, "_requiresTool", false);
    _defineProperty(this, "_mapColor", "grass");
    _defineProperty(this, "_soundType", "grass");
    this.identifier = identifier;
    this.name = name;
  }
  _createClass(Block, [{
    key: "tagBlock",
    value: function tagBlock(tag) {
      this._blockTags.push(tag);
      return this;
    }
  }, {
    key: "tagItem",
    value: function tagItem(tag) {
      this._itemTags.push(tag);
      return this;
    }
  }, {
    key: "tagBoth",
    value: function tagBoth(tag) {
      this.tagBlock(tag);
      this.tagItem(tag);
      return this;
    }
  }, {
    key: "material",
    value: function material(materialType) {
      this._soundType = materialType.getSound();
      this._mapColor = materialType.getMapColor();
      return this;
    }
  }, {
    key: "hardness",
    value: function hardness(_hardness) {
      this._hardness = _hardness;
      return this;
    }
  }, {
    key: "blastResistance",
    value: function blastResistance(_blastResistance) {
      this._blastResistance = _blastResistance;
      return this;
    }
  }, {
    key: "lightLevel",
    value: function lightLevel(_lightLevel) {
      this._lightLevel = _lightLevel;
      return this;
    }
  }, {
    key: "requiresTool",
    value: function requiresTool(_requiresTool) {
      this._requiresTool = _requiresTool;
      return this;
    }
  }, {
    key: "requireTier",
    value: function requireTier(toolTier) {
      this.tagBlock(toolTier.getIdentifier());
      return this;
    }
  }, {
    key: "useTool",
    value: function useTool(toolType) {
      this.tagBlock(toolType.getIdentifier());
      return this;
    }
  }, {
    key: "getDisplayName",
    value: function getDisplayName() {
      return this.name;
    }
  }, {
    key: "getSoundType",
    value: function getSoundType() {
      return this._soundType;
    }
  }, {
    key: "getMapColor",
    value: function getMapColor() {
      return this._mapColor;
    }
  }, {
    key: "getIdentifier",
    value: function getIdentifier() {
      return MODID + ":" + this.identifier;
    }
  }, {
    key: "getHardness",
    value: function getHardness() {
      return this._hardness;
    }
  }, {
    key: "getBlastResistance",
    value: function getBlastResistance() {
      return this._blastResistance;
    }
  }, {
    key: "getLightLevel",
    value: function getLightLevel() {
      return this._lightLevel;
    }
  }, {
    key: "getRequiresTool",
    value: function getRequiresTool() {
      return this._requiresTool;
    }
  }, {
    key: "getBlockTags",
    value: function getBlockTags() {
      return this._blockTags;
    }
  }, {
    key: "getItemTags",
    value: function getItemTags() {
      return this._itemTags;
    }
  }]);
  return Block;
}();
var Blocks = {
  PHOSPHORITE: new Block("phosphorite", "Phosphorite").material(MaterialType.STONE).useTool(ToolType.PICKAXE).requireTier(ToolTier.IRON).tagBoth("forge:ores/phosphorus").tagBoth("forge:ores"),
  BORAX: new Block("borax", "Borax").material(MaterialType.STONE).useTool(ToolType.PICKAXE).requireTier(ToolTier.IRON).tagBoth("forge:ores/borax").tagBoth("forge:ores"),
  COMPOST_FLORAL: new Block("floral_compost", "Floral Compost").material(MaterialType.DIRT).useTool(ToolType.SHOVEL),
  COMPOST_MULCH: new Block("mulch_compost", "Mulch").material(MaterialType.DIRT).useTool(ToolType.SHOVEL),
  COMPOST_ORGANIC: new Block("organic_compost", "Organic Compost").material(MaterialType.DIRT).useTool(ToolType.SHOVEL),
  COMPOST_CORAL: new Block("coral_compost", "Coral Compost").material(MaterialType.DIRT).useTool(ToolType.PICKAXE),
  INACTIVE_NAQUADRIA_SUBSTRATE: new Block("inactive_naquadria_substrate", "Inactive Naquadria Substrate").material(MaterialType.METAL).useTool(ToolType.PICKAXE).hardness(2).blastResistance(10)
};
let Gas = /*#__PURE__*/function () {
  "use strict";

  function Gas(identifier, name) {
    _classCallCheck(this, Gas);
    _defineProperty(this, "_color", 0x000000);
    this.identifier = identifier;
    this.name = name;
  }
  _createClass(Gas, [{
    key: "color",
    value: function color(_color) {
      this._color = _color;
      return this;
    }
  }, {
    key: "getIdentifier",
    value: function getIdentifier() {
      return "mekanism:" + this.identifier;
    }
  }, {
    key: "getDisplayName",
    value: function getDisplayName() {
      return this.name;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this._color;
    }
  }]);
  return Gas;
}();
var Gases = {
  BLAZE_GAS: new Gas("blaze_gas", "Blaze Gas").color(0xF18A22),
  PHOSPHORUS_GAS: new Gas("phosphorus", "Phosphorus Gas").color(0xFFFFDD),
  SILICON_GAS: new Gas("silicon", "Molten Silicon").color(0xEECCCC),
  DOPED_SILICON_GAS: new Gas("doped_silicon", "Doped Molten Silicon").color(0xFFCCDD),
  RESIN: new Gas("photoresist", "Photoresist").color(0xFF643C),
  BORON_TRIFLUORIDE: new Gas("boron_trifluoride", "Boron Trifluoride").color(0xFFFFFF),
  BORON_TRIOXIDE: new Gas("boron_trioxide", "Boron Trioxide").color(0xFFFFFF),
  TREE_SAP: new Gas("tree_sap", "Tree Sap").color(0xc06000),
  NAQUADRIA: new Gas("naquadria", "Naquadria").color(0x444444)
};
