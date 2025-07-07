ServerEvents.recipes(rune => {
     rune.custom({
        type: 'malum:spirit_infusion',
        extra_items: [
            {count:1, item: 'minecraft:campfire'},
            {count: 4, item: 'minecraft:amethyst_shard' },
            {count: 4, item: 'minecraft:sugar'}
        ],
        input: { count: 1, tag: 'kubejs:scrolls'},
        output: {count: 1, item:'kubejs:lavacandy'},
        spirits: [
            {type: 'infernal', count: 4},
            {type:'arcane', count: 2}
        ]

    })

    rune.custom({
        type: 'malum:spirit_infusion',
        extra_items: [
            {count:2, item: 'malum:processed_soulstone' },
            {count: 1, item: 'create:electron_tube'},
            {count: 4, item: 'minecraft:amethyst_shard' },
            {count: 4, item: 'minecraft:sugar'}
        ],
        input: { count: 1, tag: 'kubejs:scrolls'},
        output: {count: 1, item:'kubejs:braincandy'},
        spirits: [
            {type: 'arcane', count: 2},
            {type:'eldritch', count: 1},
            {type: 'wicked', count: 3}
        ]

    })

    rune.custom({
        type: 'malum:spirit_infusion',
       extra_items: [],
        input: { count: 1, item: 'hexcasting:amethyst_dust'},
        output: {count: 1, item:'malum:hex_ash'},
        spirits: [
            {type: 'arcane', count: 1}
        ]

    })
    rune.custom({
         type: 'malum:spirit_infusion',
        extra_items: [
            {count: 2, tag: 'c:mushrooms' },
            {count: 1, item: 'minecraft:water_bucket'},
            {count: 4, item: 'minecraft:amethyst_shard' },
            {count: 4, item: 'minecraft:sugar'}
        ],
        input: { count: 1, tag: 'kubejs:scrolls'},
        output: {count: 1, item:'kubejs:batterycandy'},
        spirits: [
            {type: 'arcane', count: 2},
            {type: 'aqueous', count: 3}
        ]

    })

    rune.custom({
        type: 'malum:spirit_infusion',
        extra_items: [
            {count: 2, item: 'minecraft:phantom_membrane'},
            {count: 4, item: 'minecraft:amethyst_shard' },
            {count: 4, item: 'minecraft:sugar'}
        ],
        input: { count: 1, tag: 'kubejs:scrolls'},
        output: {count: 1, item:'kubejs:wingcandy'},
        spirits: [
            {type: 'eldritch', count: 1},
            {type: 'aerial', count: 4}
        ]
    })

    rune.custom({
        type: 'malum:spirit_infusion',
        extra_items: [
            {count: 1, item: 'botania:mana_pearl'},
            {count: 1, item: 'create:shadowsteel'},
            {count: 4, item: 'minecraft:amethyst_shard' },
            {count: 4, item: 'minecraft:sugar'}

        ],
        input:  { count: 1, tag: 'kubejs:scrolls'},

         output: {count: 1, item:'kubejs:gatecandy'},
        spirits: [
            {type: 'eldritch', count: 2},
            {type: 'arcane', count: 4}
        ]
    })
})