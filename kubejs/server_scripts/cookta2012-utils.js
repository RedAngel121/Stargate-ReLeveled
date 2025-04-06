// priority 2
// This is gonna be awful ... THEN WHY DID YOU DO IT LIKE THIS?!?!
ServerEvents.recipes(event => {
  event.shaped("sgcommunity_pack:region_inspection_stick", ["d", "s"], {  
    "d": "minecraft:red_dye", 
    "s": "minecraft:stick" 
  });
  event.shaped("sgcommunity_pack:region_claiming_stick", ["d", "s"], {  
    "d": "minecraft:yellow_dye", 
    "s": "minecraft:stick" 
  });
});