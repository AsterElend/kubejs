ServerEvents.recipes(write =>{
    write.custom({
    type: 'create:item_application',
    ingredients: [{ item: 'minecraft:sugar_cane'}, {item: 'minecraft:poisonous_potato'}],
    results: [{item: 'spectrum:quitoxic_reeds'}]
})



write.custom({
    type: 'botania:petal_apothecary',
    ingredients: [ 
        { tag: 'minecraft:leaves'},
        { tag: 'minecraft:leaves'},
        { tag: 'minecraft:leaves'},
        { tag: 'minecraft:leaves'},
        {item: 'minecraft:rabbit_foot'}

    ],
    output: {item: 'spectrum:four_leaf_clover'},
    reagent: {tag: 'botania:seed_apothecary_reagent'}
})
write.custom({
    type: 'botania:petal_apothecary',
    ingredients: [ 
        { tag: 'minecraft:leaves'},
        { tag: 'minecraft:leaves'},
        { tag: 'minecraft:leaves'},
        

    ],
    output: {item: 'spectrum:clover'},
    reagent: {tag: 'botania:seed_apothecary_reagent'}
})
write.custom({
    type: 'botania:petal_apothecary',
    ingredients: [ 
        { tag: 'minecraft:leaves'},
        {item: 'minecraft:pink_dye'}
        

    ],
    output: {item: 'minecraft:pink_petals'},
    reagent: {tag: 'botania:seed_apothecary_reagent'}
})
write.custom({
    type: 'botania:petal_apothecary',
    ingredients: [ 
        { tag: 'minecraft:leaves'},
        {tag: 'botania:petals/orange'},
        {tag: 'botania:petals/white'},
        {item: 'spectrum:shimmerstone_gem'}
        

    ],
    output: {item: 'spectrum:mermaids_gem'},
    reagent: {tag: 'botania:seed_apothecary_reagent'}
})




})