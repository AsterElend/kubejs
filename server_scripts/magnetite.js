ServerEvents.recipes(why=>{
    why.custom({
        type: 'create:haunting',
        ingredients: [ { item: 'kubejs:lavenstone'}],
        results: [{item: 'create_new_age:magnetite'}]
    })

})