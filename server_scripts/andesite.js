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
            B: 'hexcasting:amethyst_dust_block'
        }
    )
}
)