### Server File Removals:
Configs:
- Remove Viscord
Mods:
- Chat Plus
- Sodium
- Iris
- WorldEdit CUI

### TODO:
- SGJ UPDATE coming soon:
  - remove the cartouche custom recipe or change new default recipe
  - MOD/sgjourney/space_location for DeeperDarker, Overworld Mirror, Undergarden
    - verify that all dims show up in abydos cartouche rooms

- Add Silver to the Myst Ag quests

- Chisel Blocks: Aluminum, Cobalt, Invar - These have no recipe and need to be added to the chisel workbench somehow
- Make chem cells https://github.com/GlodBlock/ExtendedAE/wiki/Custom-Infinity-Cell
- make/change the infinite item/fluid/chem cell recipes to be more production centered
- ? TAGS: CreateAdditions bio pellet and pellet block need to be adjusted to be bio-fuels compatible
- ? Choose Mekanism Uranium or Oritech Uranium - change world gen

### Oritech Upgrades:
- New Oritech Quest Chapter
- Circuit Etching Mask made of smithing templates from different modded dims
- Integrate Oritech - this would be amazing to add compat for, make even more complex circuits and recipe chains... make a ZPM with it?
- Super Endgame Quests - ZPM hub Reward?
- ZPM replication options for endgame (talk to cookta) > use the Antiprotonic Nucleosynthesizer
- Find a way to include UU Matter into endgame recipes
- 2 new circuits: one for replacing the Comp Core and a new one called Zero Point Energy Circuit that can be used to craft the ZPM and ZPM hub

### Long Term Goals:
- Make a Custom Cartouches mod https://discord.com/channels/1011344665678708818/1522021932420304957/1533215393945092238
- Vote Stop? https://www.curseforge.com/minecraft/mc-mods/vote-stop-server
- Possible integration? https://www.curseforge.com/minecraft/mc-mods/power-grid
- check for updates to https://www.curseforge.com/minecraft/mc-mods/ars-elixirum-forge
- Add Ars Elixirum for Potion Making after it gets properly updated > then check apoth charms compat
- Add Tempad as an After-Oritech endgame TP item that can(t?) travel between dims - requires ZPM?
- Swap out the long ass recipe chains for individual recipes and items, making JEI/EMI Actually useful
- check if https://www.curseforge.com/minecraft/mc-mods/ancient-remnants is 1.21.1 yet

### Dimensional Options:
- add more dims by way of custom shit or add Alex Caves Dims mods and include a new gate per dimension
  - https://www.curseforge.com/minecraft/mc-mods/alexs-caves-unofficial-port
  - https://www.curseforge.com/minecraft/mc-mods/dimensions-of-alexs-caves-unofficial-port
- Overworld caves dimension similar to the nether
Me      : I want to expand the sgj dims with more ores and stuff
Request : Can we just get a giant cave dim? Like the Nether but with overworld blocks?
Me      : I can agree with that, adding a new dimension isn't easy, biomes and ores need to be accounted for... I would have to add a new Stargate structure too...
Me      : oh maybe i could look into adding that city mod that adds houses and skyscrapers and whatnot for a new vacated city dim... its a lot but its not a bad idea

====================================================================================================

### Quantum core setup

| Step | Process
| ---: | -------------------------------------
|    1 | Start with something equivalent to a Computation Core, a somewhat complex item that has ties to the quantum complex
|    2 | Create Quantum Substrate out of the normal mekanism substrates fused with some quantum bullshittery i guess
|    3 | Refine C.Quartz and N.Quartz material into a slurry and combine them (Sodium hydroxide can dissolve quartz, is that chem available? should i make it? or try something similar?)
|    4 | Produce Ultra-Pure Silicon from the slurry in the crystalizer
|    5 | Produce Superconducting Resistant Material  using ultra pure silicon
|    6 | Create Cryogenic Compound using a mix of "cold" chemicals (research needed)
|    7 | Create Quantum Conductor out of several different items and metals (research needed)
|    8 | Create Superconducting Wire out of quantum conductor metals
|    9 | Produce Quantum-Grade Crystal Compound
|   10 | Purify that Crystal Compound then pass it through a atomic assembler
|   11 | Create Crystal Lattice in the atomic assembler
|   12 | Manufacture Quantum Resonator
|   13 | Manufacture Magnetic Containment Coil
|   14 | Manufacture Cryogenic Chamber
|   15 | Create Quantum Control Unit
|   16 | Create Entangled Pair
|   17 | Stabilize Entangled Pair
|   18 | Create Quantum Memory Matrix
|   19 | Create Superconducting Processor
|   20 | Combine Processor + Resonator
|   21 | Apply Quantum Control Layer
|   22 | Cool Quantum Assembly
|   23 | Initialize Quantum State
|   24 | Stabilize Quantum State
|   25 | Integrate with Computation Core
|   26 | Final Quantum Core

====================================================================================================

### Mod Updates:
**Neoforge: 21.1.251 -> 21.1.252**
AE2 Import Export Card: 1.9.0 -> 1.9.1
Apotheosis: 8.8.0 -> 8.9.0
Apothic Attributes: 2.10.1 -> 2.11.0
Applied Energistics 2: 19.2.17 -> 19.2.18
Balm: 21.0.65 -> 21.0.66
Create: Interiors: 0.6.1 v2 -> 0.6.1 v3
CreativeCore: v2.13.48 -> v2.13.49
Distant Horizons: 3.3.2 -> 3.3.3
FancyMenu: 3.9.12 -> 3.9.14
FTB Library (NeoForge): 2101.1.36 -> 2101.1.37
Just Enough Items (JEI): 19.57.0.447 -> 19.57.0.450
Just Enough Mekanism Multiblocks: 7.21 -> 7.22
Moonlight Lib: 3.6.8 -> 3.7.0
Puzzles Lib: v21.1.60 -> v21.1.62
Sophisticated Backpacks Create Integration: 0.2.0.168 -> 0.2.1.171
Sophisticated Backpacks: 3.26.3.2158 -> 3.26.6.2174
Sophisticated Core: 1.5.1.2341 -> 1.5.2.2343
Sophisticated Storage: 1.5.91.2127 -> 1.6.0.2136
Stargate Journey: 0.6.48-hotfix1 -> 0.6.49
Trash Cans: 1.1.0 -> 1.1.1
Modded Omelet Datapack: 170 -> 171

### Changes:
- ReAdded Silver and provided full integration between MystAg/Inf Cell/Potions Master/FTBQuest

### Additions:
- Added 3 new Main Menu Backgrounds for a total of 32 (Thanks Licflagg!)
- Starbounded Gates (Thanks Licflagg!)

### Removals:
- Immersive Armors (crashing the game on load)

### Known Issues:
- Chairs/Benches/Seats cannot be sat on in airless Ad Astra Dimensions without a single block of oxygen below it. Use an Ad Astra Vent underneath the seat to prevent death.