ServerEvents.recipes(zap => {
    zap.custom({
        type: 'create_new_age:energising',
        energy_needed: 2000,
        ingredients: [
            {
                item: 'kubejs:wand_core'
            }
        ],
        results: [
            {
                item: 'hexcasting:charged_amethyst'
            }
        ]
    })
      zap.shaped(
        Item.of('toms_storage:ts.storage_terminal', 1),
        [
            'ABA',
            'CLX',
            'ABA'
            
        ],
        {
            A: 'hexcasting:edified_planks',
            C: 'spectrum:heartbound_chest',
            B: 'spectrum:citrine_shard',
            L: 'spectrum:shimmerstone_block',
            X: '#c:glass_blocks'
        }
    ) 
    zap.shaped(
        Item.of('toms_storage:ts.inventory_connector', 1),
        [
             'ABA',
            'CLC',
            'AZA'
        ],
        {
            A: 'hexcasting:edified_planks',
            C: 'spectrum:heartbound_chest',
            B: 'spectrum:topaz_shard',
            Z: 'spectrum:citrine_shard',
            L: 'kubejs:wand_core'


        }
    )
   
})