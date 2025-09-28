ServerEvents.recipes(ink => {
    ink.shaped(
        Item.of('enchanted:altar', 6),
        [
            'ABC',
        'DED',
        'DED'
        ],
        {
            A: 'enchanted:breath_of_the_goddess',
            B: 'malum:runic_sap',
            C: 'enchanted:exhale_of_the_horned_one',
            D: '#minecraft:stone_bricks',
            E: 'enchanted:rowan_log'
        }
    )
})