ServerEvents.recipes(anyname =>{
   
    function swap (input, out) {
         anyname.custom({
        type: 'botania:mana_infusion',
       
        input: {
           item: input
        },
        mana: 1000,
        output: {
            item: out
        }
    })}


swap('minecraft:amethyst_shard', 'spectrum:topaz_shard')
swap('spectrum:topaz_shard', 'spectrum:citrine_shard')
swap('spectrum:citrine_shard', 'minecraft:amethyst_shard')

swap('kubejs:lavenstone', 'minecraft:calcite')
swap('minecraft:calcite', 'minecraft:smooth_basalt')


})