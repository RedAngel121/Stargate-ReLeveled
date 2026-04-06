### Crashes on Startup:
- WATUT - https://github.com/Corosauce/WATUT/issues/95
- Immersive Armors - Unknown Crash

### Changes:
- Updated MC to 1.21.1
- Swapped to Neoforge 21.1.224
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
- XK's Decoration and Dependancies:
  - Kiwi
  - Forgified Fabric API
- a few more that i probably forgot to list...

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
- Quark/Zeta is causing crash on startup (keybind error resolved: "Back Button Keybind" = false)
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
- SGJ Configs: regen with correct protection values?
- Add Expanded, Extended, and Advanced AE mods
- Mekanism More Machines mod


### Long Term Goals:
- Integrate PnumaticCraft
- Integrate Oritech
- Endgame Quests - ZPM Reward?

### Things to do when Myst-Ag is installed:
- Substrate Crux for all ores similar to 1.20.1 version
- https://blakesmods.com/docs/mysticalcustomization/editing-crops

### PLAYER LOGIN BOOK - Convert to Quests:

- Page 1 
- **Info about this Modpack**
- Welcome to Stargate Releveled! This modpack has quests that will guide you through 5 crafting tiers of circuits. You can either keybind the questbook or open the questbook from the top left corner of your screen while in your inventory. See next page for info about Easy Mode. 

- Page 2
- **Easy Mode**
- Easy mode allows you to skip some of the more ridiculous progression steps of the modpack by getting rid of the requirement for crafting circuits.
- This makes it more like the default experience for mekanism and create. 
- When easy mode is enabled, your quest book will be updated to show all the quests, and you will get access to the oredictionificator to convert items.
- /easymode toggle will toggle easymode on and off

- Page 3
- **Oredictionificator**
- By using /easymode getconverter, you will be given the Oredictionificator
- To use it, you need to add a filter. You can use the following tags:
  - convert:mosfet, converts redstone to MOSFETs
  - convert:ic, converts osmium ingots to Integrated Circuits
  - convert:computation_core, converts advanced control circuits into computation cores
  - convert:isotopic_oscillator, converts uranium into isotopic oscillators
- After you enter a tag, you just need to insert items to convert them!"

### CHECK ALL STRUCTURES:
- abydos pyramid has some texturing that got lost in translation and needs to be re-applied (vtech DMs https://discord.com/channels/@me/1318445317724835890/1490218146500706435)
- Custom Gates need to be adjusted to the MoreGate mod
- check why Nether Gate never showed up - overlapless killed it lol
- check why End Gate never showed up - overlapless killed it lol
- check why Undergarden Gate never showed up - overlapless killed it lol
- need to double check the rest of them