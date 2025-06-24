ServerEvents.recipes(rune=>{
    function swap (input, out) {
         rune.custom({
        type: 'botania:mana_infusion',
        catalyst:{
            type: 'block',
            block: 'botania:alchemy_catalyst'
        },
        input: {
           item: input
        },
        mana: 1000,
        output: {
            item: out
        }
    })}


      swap('minecraft:brown_mushroom', 'minecraft:red_mushroom')
  swap('minecraft:red_mushroom', 'minecraft:brown_mushroom')
swap('supplementaries:flax_seeds','farmersdelight:rice')
swap('farmersdelight:rice', 'farmersdelight:onion')
swap('farmersdelight:onion','farmersdelight:tomato_seeds')
swap('farmersdelight:tomato_seeds','farmersdelight:cabbage_seeds')
swap('farmersdelight:cabbage_seeds', 'supplementaries:flax_seeds')



})