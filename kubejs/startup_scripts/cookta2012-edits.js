// priority: 0
// Visit the wiki for more info - https://kubejs.com/

console.info('Loading cookta2012 Startup Scripts');

StartupEvents.registry("item", event => {
  event.create('sgcommunity_pack:region_inspection_stick')
      .displayName('Region Inspection Stick')
      .texture('minecraft:item/stick');
  event.create('sgcommunity_pack:region_claiming_stick')
      .displayName('Region Claiming Stick')
      .texture('minecraft:item/stick');
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
console.info('Loaded cookta2012 Startup Scripts');
