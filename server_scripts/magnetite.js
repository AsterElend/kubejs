ServerEvents.recipes(why=>{
    why.custom({
        type: 'create:haunting',
        ingredients: [ { item: 'kubejs:lavenstone'}],
        results: [{item: 'create_new_age:magnetite'}]
    })

     why.custom({
        type: 'create:haunting',
        ingredients: [ { item: 'minecraft:raw_gold'}],
        results: [{item: 'malum:cthonic_gold'}]
    })
    
    
    why.shapeless(
        Item.of('create:encased_chain_drive', 1),
        [   'create:andesite_casing',
            'create:zinc_nugget',
            'create:zinc_nugget',
            'create:zinc_nugget'

        ]
    )

})