### Crashes on Startup:
- WATUT - https://github.com/Corosauce/WATUT/issues/95
- Immersive Armors - Unknown Crash

### Changes:
- Updated MC to 1.21.1
- Swapped to Neoforge 21.1.219
- Create: Steam and Rails (replaced with unofficial version for 1.21.1)
- Replaced Terrablender Forge with Terrablender Neoforge
- Replaced Yungs Forge mods with Yungs Neoforge mods for 1.21.1
- Replace Chat Heads with ChatPlus
- Replace Jaopca with ATO (double check that it works)
- Stellaris (replaces AdAstra)
- Extra Sponges (replaces simple sponge mod)
- Corpse (Relpace Gravestones and provides compat)

### Additions:
- Veinminer Enchantment
- Nullscape
- BetterEnd and Dependancies:
  - BCLib
  - WunderLib
  - WorldWeaver
- New DarkHax Dependancies:
  - Prickle
  - Nyctography
- New Apotheosis Dependancies:
  - Apothic Spawners
  - Apothic Enchanting
- New Immersive Paintings Dependancy: Fzzy Config
- Gateways to Eternity
- Structure Overlapless
- a few more that i probably forgot to add

### Removals:
- Botarium
- Canary
- Dairy Peripherals
- Experimental Settings Disabler
- MrCrayfish's Furniture Mod (Duplicate)
- Dimensional Structure Restrict (waiting on 1.21.1 update)
- Game Stages
- FTB Item Filters
- Mekanism Covers (Dupe for Cable Facades)
- Numismatics - replaced with vanilla create
- kubejs-botany-pots (replaced with Myst AG + custom recipes)

### Still Missing:
- SGJ Deco (is this even required?)
- SGJ Ponder (waiting on 1.21.1 update to re-add it)
- Tiny Redstone/Gates (replace with little_big_redstone?)
- unlimitedperipheralworks (drop until update, talk to author about update timeframe)
- KubeJS Additions (no idea what this is for, or what itll break when its removed)
- Gauges and Switches (waiting on 1.21.1 update to re-add it)

### NOTES:
- DimStruc Restrict mod needs to be updated to handle the Overworld Mirror gates generation/prevention
- Overlapless Config: Add SGJ stuff to prevent loss of progression
- Quark/Zeta is causing crash on startup (keybind error resolved:	"Back Button Keybind" = false)
- Refactor the entire KubeJS folder to accomodate the new mod changes and 1.21.1 update
  - [ ] fix custom Kubejs scripts
  - [x] #forge replaced with #c
  - [x] Extract all standard crafting recipes and make them their own recipe json files
- Find a replacement for Discord RPC 
- Discord Chat Integration replaced with https://www.curseforge.com/minecraft/mc-mods/viscord
- Adjust the configs folder for mod additions/removals
- Redo the Quests to make use of the updated mods

### Look into:
- https://www.curseforge.com/members/mrtjp/projects (project red)
- https://www.curseforge.com/minecraft/mc-mods/more-red
- https://www.curseforge.com/minecraft/mc-mods/little-big-redstone

- https://www.curseforge.com/minecraft/mc-mods/alexs-caves
- https://www.curseforge.com/minecraft/mc-mods/alexs-caves-dimension

- Replace the botany growing pots with Myst Ag and replace ALL the recipes with our own stuff
  - This requires a complete rewrite of the kubejs scripts to seperate out the growing from manufacturing
- ZPM replication options for endgame (talk to cookta)
- SGJ Configs: regen with correct values
- Add Expanded, Extended, and Advanced AE mods
- Mekanism More Machines mod


### Long Term Goals:
- Integrate PnumaticCraft
- Integrate Oritech
- Endgame Quests - ZPM Reward?

### Things to do when Myst-Ag is installed:
- Substrate Crux for all ores similar to 1.20.1 version
- https://blakesmods.com/docs/mysticalcustomization/editing-crops
