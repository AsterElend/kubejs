ServerEvents.recipes(star => {

star.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {item: 'spectrum:storm_stone'},
            {item: 'minecraft:glowstone_dust'},
            {item: 'spectrum:raw_azurite'},
            {item: 'spectrum:shimmerstone_gem'}
            
            
        ],
        results: [
            {
                item: 'spectrum:glistering_shooting_star'
            }
        ]
    })
// james, shooting stars fall from the sky. why do you need a recipie?

})
