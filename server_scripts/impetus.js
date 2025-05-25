ServerEvents.recipes(mind => {
    mind.shaped(
  Item.of('hexcasting:impetus/empty', 1), // arg 1: output
  [
    'LSS',
    'BCB', // arg 2: the shape (array of strings)
    'SSL'
  ],
  {
    L: 'kubejs:lavenstone',
    B: 'minecraft:iron_bars',
    S: 'hexcasting:slate_block',
    C: 'kubejs:wand_core'

  }
)
    
})