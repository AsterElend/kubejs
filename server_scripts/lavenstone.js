ServerEvents.recipes(flamingo => {
    flamingo.shaped(
        Item.of('minecraft:andesite', 1),
        [
            'BB ',
            'BB ',
            '   '
            
        ],
        {
            B: 'spectrum:amethyst_powder'
        }
    )
    flamingo.remove({output: 'hexcasting:amethyst_dust_block'})

    flamingo.shapeless(
        Item.of('kubejs:lavenstone', 1),
        [
            'minecraft:andesite',
            'spectrum:amethyst_powder'
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

    flamingo.custom({
        type: 'create:mixing',
        ingredients: [
            {item: 'botania:cobble_rod'},
            {item:'minecraft:dirt'}
        ],
        results: [
            {item: 'spectrum:amethyst_powder'},
            {item:'botania:cobble_rod'},
            {item:'minecraft:dirt'}
        ]

    })
    
})

