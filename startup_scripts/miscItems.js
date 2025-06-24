StartupEvents.registry('item', event => {
    event.create('wand_core').glow(true).displayName('Core')

    event.create('moon_pearl').maxStackSize(16).glow(true)

    event.create('calculating_pie').food(food => {
        food.hunger(6).saturation(4)
        .alwaysEdible()
        .effect('hexcasting:enlarge_grid', 2400, 0, 1)
        
    })
 
    
})

