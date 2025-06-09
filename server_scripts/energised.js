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
})