ServerEvents.recipes(event => {

    event.shaped(
        Item.of('kubejs:wand_core', 1),
        [
            ' D ',
            'DBD',
            ' D '
        ],
        {
            D: 'hexcasting:amethyst_dust',
            B: 'hexcasting:amethyst_dust_block'
        }
    )

   function wand(output, plank) {
     event.shaped(output, [
        ' SC',
        ' PS',
        'S  '
     ], {
        S: 'minecraft:stick',
        C: 'kubejs:wand_core',
        P: plank
     })
   }

   wand('hexcasting:staff/oak', 'minecraft:oak_planks')
   wand('hexcasting:staff/spruce', 'minecraft:spruce_planks')
   wand('hexcasting:staff/birch', 'minecraft:birch_planks')
    wand('hexcasting:staff/jungle', 'minecraft:jungle_planks')
   wand('hexcasting:staff/mangrove', 'minecraft:mangrove_planks')
   wand('hexcasting:staff/dark_oak', 'minecraft:dark_oak_planks')
   wand('hexcasting:staff/acacia', 'minecraft:acacia_planks')
    wand('hexcasting:staff/crimson', 'minecraft:crimson_planks')
     wand('hexcasting:staff/warped', 'minecraft:warped_planks')
      wand('hexcasting:staff/cherry', 'minecraft:cherry_planks')
       wand('hexcasting:staff/bamboo', 'minecraft:bamboo_planks')
        wand('hexcasting:staff/edified', 'hexcasting:edified_planks')






    console.log("wnad recipies inputted")
})