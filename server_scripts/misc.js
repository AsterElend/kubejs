ServerEvents.recipes(rune => {
    
rune.custom({
    type: 'create:item_application',
    ingredients: [{ tag: 'minecraft:saplings'}, {tag: 'botania:runes'}],
    results: [{item: 'malum:runewood_sapling'}]
})


   

    rune.custom({
        type: 'create:splashing',
        ingredients: [{ item: 'malum:aerial_spirit'}],
        results: [{item: 'malum:aqueous_spirit'}]
    })


     rune.custom({
        type: 'botania:mana_infusion',
        input: {
           item:  'hexcasting:amethyst_dust'
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

})