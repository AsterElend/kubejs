ServerEvents.recipes(why =>{
    why.custom({
           
         type: 'malum:spirit_infusion',
        extra_items: [
             {count: 4, tag: 'c:gunpowder'},
             {count: 1, item: 'minecraft:cthonic_gold'},
            {count: 6, tag: 'c:zinc_ingots' },
            
           
           
        ],
        input: { count: 1, tag: 'malum:alchemical_impetus'},
        output: {count: 1, item:'malum:zinc_impetus'},
        spirits: [
            {type: 'earther', count: 8},
            {type: 'infernal', count: 8}
        ]

    })
})