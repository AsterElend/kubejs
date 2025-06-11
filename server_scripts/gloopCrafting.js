ServerEvents.recipes(gloop =>{
    gloop.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'farmersdelight:pie_crust'},
            {
                "amount": 811,
                fluid: 'kubejs:hex_gloop',
                nbt: {}
            }
        ],
        results: [{item: 'kubejs:calculating_pie'}]

    })

    gloop.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {item: 'hexcasting:charged_amethyst'},
            {item: 'minecraft:slime_ball'},
            {item: 'malum:hex_ash'},
            {item: 'malum:hex_ash'},
            {item: 'malum:hex_ash'},
            {
                amount: 81000,
                fluid: 'minecraft:water',
                nbt: {}
            }
        ],
        results: [
            {
                amount: 81000,
                fluid: 'kubejs:hex_gloop'
            }
        ]
    })


})