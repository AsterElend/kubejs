ServerEvents.recipes(rocs =>
{
    rocs.custom({
        type: 'botania:pure_daisy',
        input: {
            type: 'block',
            block: 'kubejs:lavenstone'
        },
        output: { name: 'botania:livingrock'}
    })
}
)