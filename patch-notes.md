### Server File Removals:
Configs:
- Remove Viscord
Mods:
- Chat Plus
- Sodium
- Iris
- WorldEdit CUI

### TODO:
- find a way to change Athos' biome to BoP Redwoood Forest without causing the gate to spawn in the overworld, maybe struc restrict can help there?
- when updating CC better speakers mod check configs to disable debug logs

### Oritech Upgrade:
- New Oritech Quest Chapter
- Circuit Etching Mask made of smithing templates from different modded dims
- Integrate Oritech - this would be amazing to add compat for, make even more complex circuits and recipe chains... make a ZPM with it?
- Super Endgame Quests - ZPM hub Reward?
- ZPM replication options for endgame (talk to cookta) > use the Antiprotonic Nucleosynthesizer
- Find a way to include UU Matter into endgame recipes
- 2 new circuits: one for replacing the Comp Core and a new one called Zero Point Energy Circuit that can be used to craft the ZPM and ZPM hub
- make/change the infinite item/fluid/chem cell recipes to be more production centered
- Make chem cells https://github.com/GlodBlock/ExtendedAE/wiki/Custom-Infinity-Cell
  - sgcommunity_pack:blaze_gas
  - sgcommunity_pack:phosphorus
  - sgcommunity_pack:silicon
  - sgcommunity_pack:doped_silicon
  - sgcommunity_pack:photoresist
  - sgcommunity_pack:boron_trifluoride
  - sgcommunity_pack:boron_trioxide
  - sgcommunity_pack:tree_sap
  - sgcommunity_pack:naquadria
  - Hydrofluoric acid
  - Ethene
  - Sodium

### Extra TODOs that are not all that important yet:
- Chisel Blocks: Aluminum, Cobalt, Invar - These have no recipe and need to be added to the chisel workbench somehow
- ? TAGS: CreateAdditions bio pellet and pellet block need to be adjusted to be bio-fuels compatible
- ? Choose Mekanism Uranium or Oritech Uranium - change world gen

### Long Term Goals:
- Make a Custom Cartouches mod https://discord.com/channels/1011344665678708818/1522021932420304957/1533215393945092238
- Vote Stop? https://www.curseforge.com/minecraft/mc-mods/vote-stop-server
- Possible integration? https://www.curseforge.com/minecraft/mc-mods/power-grid
- check for updates to https://www.curseforge.com/minecraft/mc-mods/ars-elixirum-forge
- Add Ars Elixirum for Potion Making after it gets properly updated > then check apoth charms compat
- Add Tempad as an After-Oritech endgame TP item that can(t?) travel between dims - requires ZPM?
- Swap out the long ass recipe chains for individual recipes and items, making JEI/EMI Actually useful
- https://www.curseforge.com/minecraft/mc-mods/ancient-remnants is available on 1.21.1 - Destony Monolith Planet?
  - add a new planet and assign the monoliths to that dim instead of being allowed to spawn in the overworld

### Dimensional Options:
- Need Stargate Structure
- Need Address Region and Space Location files
- Adjust config to disable vanilla portal (where necessary)

- The Lost Cities mod https://www.curseforge.com/minecraft/mc-mods/the-lost-cities, New Tollana?
- add more dims by way of custom shit or add Alex Caves Dims mods and include a new gate per dimension
  - https://www.curseforge.com/minecraft/mc-mods/alexs-caves-unofficial-port
  - https://www.curseforge.com/minecraft/mc-mods/dimensions-of-alexs-caves-unofficial-port

- Overworld caves dimension similar to the nether
Me      : I want to expand the sgj dims with more ores and stuff
Request : Can we just get a giant cave dim? Like the Nether but with overworld blocks?
Me      : I can agree with that, adding a new dimension isn't easy, biomes and ores need to be accounted for... I would have to add a new Stargate structure too...

====================================================================================================

# Quantum core setup

### Silicon:
- take raw silicon and turn it into a chemical (mek)
- add 1 HCL for every 3 SI to start the purification process = Silicon Chloride (mek/oritech)
- distill the HCl3Si in the distill tower and create ultra pure silicon chemical (mek)
- crystalize the ultra pure silicon into Ultra Pure Silicon sheets (mek)

### Quantum Crystal
- find raw crystals and combine them somehow into a crystal mixture, maybe like how AE2 does it in water?
- purify the crystal using something that cleans crystals without destroying them
- Add Heavy Liq Naq to create a semi quantum state
- run that through the Particle Accelerator to process them into an inactive quantum crystal (find second item)
- use atomic assembler to make quantum crystal lattice

### platinum nickel super conductor
- Use dust or liquid to mix 1 Platinum and 3 Nickel
- heat it into a super conducting compound
- turn into ingots using oritech chiller
- turn into supercunductor wires
- find a way to make a supermagnet / Oritech Ion Thruster? Linear Motor?
- Apply magnetized material to supercond-wire for magnetic containment coil

### Quantum Housing
- Ultra-Pure Silicon Sheets + Quantum Crystal Lattice = Quantum Resonator.
- Cryogenic Fluid + Magnetic Containment Coil = Cryogenic Containment Unit.
- Superconducting Alloy Ingots + Ultra-Pure Silicon Sheets = Resonance Chamber.
- Quantum Resonator + Cryogenic Containment Unit + Resonance Chamber = Quantum Housing.

### Quantum Processor INCOMPLETE
- Quantum Crystal and SuperC Wire to make Quantum Circuit? something more complex?
- Entanglement Matrix
- Quantum Memory Matrix
- Quantum Processor

### Quantum Core INCOMPLETE
- multiple processors + Stabilized Quantum core = Quantum core

====================================================================================================

### Mod Updates:
- **Neoforge 21.1.263 -> 21.1.265**
- AdAstra StellarView Compatibility: 1.1.0 -> 1.2.0
- AEInfinityBooster: 1.0.0.58 -> 2.1.2
- AllTheLeaks (Memory Leak Fix): 1.1.13 -> 1.1.16
- Almanac Lib: 1.26.10.2 -> 1.26.11.1
- Applied Energistics 2: 19.2.18 -> 19.2.19
- Auto Restart: 3.0.2 -> 3.0.3
- Balm: 21.0.66 -> 21.0.67
- Blocks You Need: 1.11.4 -> 1.12.6
- Building Gadgets: 1.3.9 -> 21.1.1
- CC: Tweaked: 1.120.2 -> 1.120.2
- CC:HQ Speakers: 1.0.8 -> 1.1.0
- Chisels & Bits: 21.1.32 -> 21.1.40
- Compass to Map: JourneyMap + Explorer's/Nature's Compass Addon: 2.0.4 -> -2.1.1
- Corpse x Curios API Compat: 4.2.0 -> 4.2.1
- Corpse: 1.1.21 -> 1.1.22
- Create Encased: 1.9.0-ht3 -> 1.10.1
- Create: Copycats+: 3.0.9 -> 3.0.11
- Create: Iron Vaults: 1.2.0 -> 1.3.0
- CreativeCore: v2.13.51 -> v2.13.54
- Easy Villagers: 1.1.47 -> 1.1.49
- Exposure: 1.9.19 -> 1.9.21
- ExtendedAE: 1.21-2.2.41 -> 1.21-2.2.43
- FancyMenu: 3.9.14 -> 3.10.0
- FTB Chunks (NeoForge): 2101.1.22 -> 2101.1.23
- FTB Library (NeoForge): 2101.1.37 -> 2101.1.39
- FTB Quests (NeoForge): 2101.1.36 -> 2101.1.38
- FTB Teams (NeoForge): 2101.1.11 -> 2101.1.12
- FTB XMod Compat: 21.1.12 -> 21.1.14
- Fzzy Config: 0.7.7 -> 0.7.7+fix1
- GuideME: 21.1.19 -> 21.1.22
- Immersive Paintings: 0.7.9 -> 0.8.0
- In Control!: 10.3.0 -> 10.3.1
- Just Enough Items (JEI): 19.64.0.455 -> 19.70.0.469
- Just Enough Resources (JER): 1.6.0.17 -> 1.6.0.66
- KotlinLangForge: 2.15.0-k2.4.21-3.0 -> 2.18.0-k2.4.21-3.0
- KubeJS: 2101.7.2-build.377 -> 2101.7.2-build.381
- Let Me Despawn: 1.26.10.2 -> 1.26.11.1
- McJtyLib: 9.0.21 -> 9.0.22
- Mekanism:More Machine: 1.4.1 -> 1.4.2
- MezzConfig: 0.6.8 -> 0.7.1
- ModernFix: 5.27.26 -> 5.27.27
- Moonlight Lib: 3.7.2 -> 3.8.3
- moregate: 1.1.7 -> 1.2
- Mystical Agriculture: 8.0.28 -> 8.0.29
- Not Enough Recipe Book [NERB]: 0.4.3 -> 0.6
- Oracle Index: 1.4.0 -> 1.4.1
- Puzzles Lib: v21.1.64 -> v21.1.66
- Quark: 4.1-487 -> 4.1-488
- RFTools Builder: 7.0.7 -> 7.0.8
- Schematic Energistics: 1.5.5 -> 1.5.6
- ShatterLib | OctoLib: 0.6.2 -> 0.6.3
- Simple Voice Chat: 2.6.24 -> 2.6.27
- Sophisticated Backpacks: 3.26.12.2208 -> 3.26.21.2249
- Sophisticated Core: 1.5.14.2413 -> 1.5.32.2464
- Sophisticated Item Actions: 0.5.17.435 -> 0.5.19.446
- Sophisticated Storage in Motion: 0.10.36.381 -> 0.10.38.395
- Sophisticated Storage: 1.6.7.2184 -> 1.6.16.2222
- SuperMartijn642's Core Lib: 1.1.25 -> 1.1.26a
- Trash Cans: 1.1.1 -> 1.1.2

### Datapacks:
- Updated Starbounded Gates

### Shaders:
Solas Shader: V3.8 -> V3.9

### Changes:
- Updated FTB Quests a bit
- Updated a bunch of configs to current versions
- Removed kubejs trade blocks for computer scientist villager
- Updated Advancedperipherals/world.toml config to remove computer scientist trades
- Added Sophisticated Backpacks Config to disable accessing other peoples backpacks by default
- Removed duplicate food shanks in tooltips
- Added Silver Oresight Powder to the Oresight Quest completion requirements
- Added recipes to turn iron and copper into naquadah-copper and naquadah-iron using essence
- Scaled up the Whole Melon recipe to make nutrient solution (better than slices)

### Additions:
- CAP Addon Gate Variants
- Lever Drugster

### Removals:

### Known Issues:
- Chairs/Benches/Seats cannot be sat on in airless Ad Astra Dimensions without a single block of oxygen below it. Use an Ad Astra Vent underneath the seat to prevent death.

# Server Files uploaded!
# Public Server updated!