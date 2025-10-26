ServerEvents.recipes(rune =>{
     rune.replaceOutput(
        {output: 'create:dough'},
        'create:dough',
        'farmersdelight:wheat_dough'
    )

    rune.replaceOutput(
        {output: 'malum:copper_nugget'},
        'malum:copper_nugget',
        'create:copper_nugget'
    )
    rune.replaceInput(
        {input: 'hexcasting:amethyst_dust'},
        'hexcasting:amethyst_dust',
        'spectrum:amethyst_powder'
    )
    rune.replaceOutput(
        {output: 'hexcasting:amethyst_dust'},
        'hexcasting:amethyst_dust',
        'spectrum:amethyst_powder'
    )
    
    
})