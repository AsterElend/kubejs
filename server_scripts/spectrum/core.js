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


swap('spectrum:mysterious_locket', 'spectrum:moonstone_core')
swap('spectrum:moonstone_core', 'spectrum:mysterious_locket')


})