ServerEvents.recipes(book =>
{
    book.shapeless(Item.of('minecraft:writable_book', 1),
[
    'minecraft:feather',
    '#c:dyes',
    'minecraft:book'
])

    book.shaped(Item.of('hexcasting:spellbook', 1),
    [
        'GBA',
        'GCA',
        'GBA'
    ],
    {
        G: 'minecraft:gold_nugget',
        C: 'malum:cursed_sap',
        A: 'hexcasting:charged_amethyst',
        B: 'minecraft:writable_book'

    }
)


}
)