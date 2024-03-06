function inventory(arr) {

    let heroes = [];

    for (let el of arr) {
        let [hero, level, item] = el.split(" / ");
        level = Number(level);

        let heroObj = {
            hero: hero,
            level: level,
            item: item,
        };

        heroes.push(heroObj);

    }
    let sorted = heroes.sort((a, b) => a.level - b.level);

    for (let heroObj of sorted) {
        console.log(`Hero: ${heroObj.hero}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.item}`);
    }
}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);
// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ]
// );