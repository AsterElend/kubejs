ServerEvents.recipes(part =>
{
    part.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'kubejs:lavenstone'
            }
        ], 
        result: [
            {
                count: 1,
                item: 'minecraft:amethyst_shard'
            }
        ],
        tool: { tag: 'c:pickaxes'}
    })

     part.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'create:blaze_burner'
            }
        ], 
        result: [
            {
                count: 1,
                item: 'minecraft:blaze_rod'
            }
        ],
        tool: { tag: 'c:tools/knives'}
    })
}
)