StartupEvents.registry('block', event => {
  event.create('lavenstone') // Create a new block with ID 'kubejs:example_block'
  .displayName('Lavenstone')
  .hardness(1.5)
  .resistance(6)
  .soundType('stone')
  .requiresTool(true)
  .tagBlock('minecraft:mineable/pickaxe')
  
  event.create('charcoal_block')
  .hardness(1.5)
  .resistance(6)
  .soundType('stone')
  .requiresTool(true)
  .tagBlock('minecraft:mineable/pickaxe')
  .item(item => {
    item.burnTime(16000)
  } ).displayName('Block Of Charcoal')


})

