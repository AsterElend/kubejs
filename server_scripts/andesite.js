ServerEvents.recipes(spoons =>
{
    spoons.shaped(
        Item.of('minecraft:andesite', 3),
        [
            ' AB',
            ' BA',
            '   '   
        ],
        {
            A: 'kubejs:lavenstone',
            B: 'hexcasting:amethyst_dust'
        }
    )

    spoons.shaped(
        Item.of('kubejs:charcoal_block',1 ),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:charcoal'
        }
    )
    spoons.shapeless(
        Item.of('minecraft:charcoal', 9),
        [
            'kubejs:charcoal_block'
        ]
    )
}
)