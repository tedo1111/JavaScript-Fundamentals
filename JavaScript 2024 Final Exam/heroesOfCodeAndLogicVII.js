function heroesOfCodeAndLogicVII(input) {
    let heros = Number(input.shift());
    let hero = {};

    for (let i = 0; i < heros; i++) {
        let heroStr = input[i];
        let [heroName, hp, mp] = heroStr.split(" ");
        hero[heroName] = { hp: Number(hp), mp: Number(mp) };
    }

    let command = input.shift();

    while (command !== `End`) {
        let tokens = command.split(" - ");
        let action = tokens.shift();

        if (action === `CastSpell`) {
            let [heroName, mpNeed, spellName] = tokens;
            mpNeed = Number(mpNeed);

            if (hero.hasOwnProperty(heroName)) {
                if (hero[heroName].mp >= mpNeed) {
                    hero[heroName].mp -= mpNeed;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${hero[heroName].mp} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
            } else {
                console.log(`${heroName} is not a valid hero!`);
            }
        }
        else if (action === `TakeDamage`) {
            let [hName, damage, attacker] = tokens;
            damage = Number(damage);



            hero[hName].hp -= damage;

            if (hero[hName].hp > 0) {
                console.log(`${hName} was hit for ${damage} HP by ${attacker} and now has ${hero[hName].hp} HP left!`);
            }
            else {
                delete hero[hName];
                console.log(`${hName} has been killed by ${attacker}!`);
            }

        }
        else if (action === `Recharge`) {
            let [hName, amount] = tokens;
            amount = Number(amount);

            let beforeRecharge = hero[hName].mp;
            hero[hName].mp += amount;
            if (hero[hName].mp > 200) {
                hero[hName].mp = 200;
            }

            console.log(`${hName} recharged for ${hero[hName].mp - beforeRecharge} MP!`);
        }
        else if (action === `Heal`) {
            let [hName, amount] = tokens;
            amount = Number(amount);

            let beforeHeal = hero[hName].hp;
            hero[hName].hp += amount;
            if (hero[hName].hp > 100) {
                hero[hName].hp = 100;
            }

            console.log(`${hName} healed for ${hero[hName].hp - beforeHeal} HP!`);
        }

        command = input.shift();
    }

    let entries = Object.entries(hero);

    for (let [heroName, heroInfo] of entries) {

        console.log(`${heroName}`);
        console.log(`  HP: ${heroInfo.hp}`);
        console.log(`  MP: ${heroInfo.mp}`);

    }

}
heroesOfCodeAndLogicVII([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);

// heroesOfCodeAndLogicVII([
//     "4",
//     "Adela 90 150",
//     "SirMullich 70 40",
//     "Ivor 1 111",
//     "Tyris 94 61",
//     "Heal - SirMullich - 50",
//     "Recharge - Adela - 100",
//     "CastSpell - Tyris - 1000 - Fireball",
//     "TakeDamage - Tyris - 99 - Fireball",
//     "TakeDamage - Ivor - 3 - Mosquito",
//     "End"
// ]
// );