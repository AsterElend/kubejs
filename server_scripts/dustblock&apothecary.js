ServerEvents.recipes(flamingo => {
    flamingo.shaped(
        Item.of('kubejs:lavenstone', 3),
        [
            'BB ',
            'BB ',
            '   '
            
        ],
        {
            B: 'hexcasting:amethyst_dust_block'
        }
    )
    
    console.log("it probably worked")

    flamingo.shaped(
        Item.of('botania:apothecary_default', 1),
        [
            'LPL',
            ' L ',
            'LLL'
        ],
        {
            L: 'kubejs:lavenstone',
            P: '#botania:petals'
        }
    )
    flamingo.smelting('minecraft:stone', 'kubejs:lavenstone')
})

