StartupEvents.registry('item', event => {

  function caramelize(what,command) {
     event.create(what).displayName('Candy Containing Secrets').texture('soup:item/candy').food(food => {
    food
      .alwaysEdible() 
      .fastToEat() 
       
      .eaten(ctx => {
        
        ctx.player.runCommandSilent(command)
      })
  })
  }
  caramelize('sentinalcandy', 'hexcasting perWorldPatterns give hexcasting:sentinel/create/great')

  caramelize('lavacandy',  'hexcasting perWorldPatterns give hexcasting:create_lava')

  caramelize('braincandy',  'hexcasting perWorldPatterns give hexcasting:brainsweep')

  caramelize('batterycandy',  'hexcasting perWorldPatterns give hexcasting:craft/battery')

  caramelize('raincandy',  'hexcasting perWorldPatterns give hexcasting:summon_rain')

  caramelize('suncandy',  'hexcasting perWorldPatterns give hexcasting:dispel_rain')

  caramelize('lightningcandy',  'hexcasting perWorldPatterns give hexcasting:lightning')

  caramelize('wingcandy',  'hexcasting perWorldPatterns give hexcasting:flight')

  caramelize('spacecandy',  'hexcasting perWorldPatterns give hexcasting:teleport/great')


  
  caramelize('rendercandy',  'hexcasting perWorldPatterns give oneironaut:applymindrender')

  caramelize('blinkcandy',  'hexcasting perWorldPatterns give hexical:greater_blink')

  caramelize('eatwispcandy', 'hexcasting perWorldPatterns give hexal:wisp/consume')

  caramelize('linkwispcandy',  'hexcasting perWorldPatterns give hexal:wisp/seon/set')

  caramelize('fastcandy',  'hexcasting perWorldPatterns give hexal:tick')

  caramelize('psycandy',  'hexcasting perWorldPatterns give oneironaut:reviveflayed')

  caramelize('gatecandy',  'hexcasting perWorldPatterns give hexal:gate/make')

  caramelize('heimcandy',  'hexcasting perWorldPatterns give oneironaut:extradimensionaleval')

  caramelize('infusecandy',  'hexcasting perWorldPatterns give oneironaut:infusemedia')

  caramelize('liftcandy',  'hexcasting perWorldPatterns give oneironaut:applynotmissing')

  caramelize('stealthcandy',  'hexcasting perWorldPatterns give oneironaut:resistdetection')

  caramelize('swapcandy',  'hexcasting perWorldPatterns give oneironaut:swapspace')

  caramelize('noecandy',  'hexcasting perWorldPatterns give oneironaut:dimteleport')


/*
todo:
<all the zeniths>
hexical:
conjure_mesh
greater_blink


*/ 

  
})



