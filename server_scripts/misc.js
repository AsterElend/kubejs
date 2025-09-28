ServerEvents.recipes(rune => {
    
rune.custom({
    type: 'create:item_application',
    ingredients: [{ tag: 'minecraft:saplings'}, {tag: 'botania:runes'}],
    results: [{item: 'malum:runewood_sapling'}]
})


   

    rune.custom({
        type: 'create:splashing',
        ingredients: [{ item: 'malum:arcane_spirit'}],
        results: [{item: 'malum:aqueous_spirit'}]
    })
    rune.custom({
        type: 'minecraft:smoking',
       category: 'nevermind',
       cookingtime: 100,
       experience: 0.0,
       ingredient: {item:'malum:aqueous_spirit'},
       result: 'malum:aerial_spirit'
    })

    rune.custom({
        type: 'patchouli:shapeless_book_recipe',
        ingredients: [
            {
                item: 'spectrum:amethyst_powder'
            },
            {
                item: 'minecraft:book'
            }
        ],
        book: 'hexcasting:thehexbook'
        
})




     rune.custom({
        type: 'botania:mana_infusion',
        input: {
           tag:  'spectrum:gemstone_powders'
        },
        mana: 500,
        output: {
            item: 'botania:mana_powder'
        }
    })

    rune.custom({
        type: 'botania:mana_infusion',
        input: {
           item:  'minecraft:sugar_cane'
        },
        mana: 1000,
        output: {
            item: 'minecraft:bamboo'
        }
    })
 rune.custom({
        type: 'botania:mana_infusion',
        input: {
           item:  'minecraft:bamboo'
        },
        mana: 1000,
        output: {
            item: 'minecraft:kelp'
        }
    })

    rune.custom({
        type: 'botania:mana_infusion',
        catalyst:{
            type: 'block',
            block: 'botania:alchemy_catalyst'
        },
        input: {
           item:  'kubejs:lavenstone'
        },
        mana: 1000,
        output: {
            item: 'minecraft:deepslate'
        }
    })




    rune.custom({
        type: 'create:milling',
        ingredients: [{item: 'malum:infernal_spirit'}],
        processingTime: 50,
        results: [{ item: 'minecraft:blaze_powder'}]
    })

    rune.remove({
        output: 'minecraft:charcoal', mod: 'malum'
    })

    rune.replaceOutput(
        {output: 'create:dough'},
        'create:dough',
        'farmersdelight:wheat_dough'
    )

    rune.replaceOutput(
        {output: 'malum:copper_nugget'},
        'malum:copper_nugget',
        'create:copper_nugget'
    )

    rune.shapeless(
        Item.of('minecraft:black_dye', 1),
        [
            'minecraft:charcoal'
        ]
    )

    rune.custom({
        type: 'create:pressing',
        ingredients: [
            {item: 'kubejs:wand_core'}
        ],
        results: [{item: 'hexcasting:lens'}]
    })


      rune.custom({
        type: 'malum:spirit_infusion',
       extra_items: [],
        input: { count: 1, item: 'spectrum:amethyst_powder'},
        output: {count: 1, item:'spectrum:shimmerstone_gem'},
        spirits: [
            {type: 'infernal', count: 1}
        ]

    })

})