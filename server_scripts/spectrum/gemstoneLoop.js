ServerEvents.recipes(anyname =>{
   
    function swap (input, out) {
         anyname.custom({
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


swap('minecraft:amethyst_shard', 'spectrum:topaz_shard')
swap('spectrum:topaz_shard', 'spectrum:citrine_shard')
swap('spectrum:citrine_shard', 'minecraft:amethyst_shard')


})