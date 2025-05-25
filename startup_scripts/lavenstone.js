StartupEvents.registry('block', event => {
  event.create('lavenstone') // Create a new block with ID 'kubejs:example_block'
  .displayName('Lavenstone')
  .hardness(1.5)
  .resistance(6)
  .soundType('stone')
  .requiresTool(true)
  .tagBlock('minecraft:mineable/pickaxe')
  
  
})

