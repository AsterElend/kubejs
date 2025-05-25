ServerEvents.recipes(flax => [
    flax.custom({
        type: 'botania:mana_infusion',
        input: {
           item:  'minecraft:wheat_seeds'
        },
        mana: 1000,
        output: {
            item: 'supplementaries:flax_seeds'
        }
    }),



    flax.shaped(
        Item.of('botania:alchemy_catalyst', 1),
        ['LGL',
            'PDP',
            'LGL'
        ],
        {
            L: 'botania:livingrock'
            ,G:'minecraft:gold_ingot',
            P: 'minecraft:blaze_powder',
            D: 'botania:mana_diamond',
            

        }
    )

])