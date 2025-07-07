ServerEvents.recipes(flamingo => {
    flamingo.shaped(
        Item.of('minecraft:andesite', 4),
        [
            'BB ',
            'BB ',
            '   '
            
        ],
        {
            B: 'hexcasting:amethyst_dust_block'
        }
    )

    flamingo.shapeless(
        Item.of('kubejs:lavenstone', 1),
        [
            'minecraft:andesite',
            'hexcasting:amethyst_dust'
        ]
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

