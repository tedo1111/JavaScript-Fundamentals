function muOnline(arr) {
    let list = arr.split('|');
    let health = 100;
    let bestRoom = 1;
    let bitcoins = 0;

    for (let el of list) {
        let curEl = el.split(" ");
        let command = curEl[0];
        let number = Number(curEl[1]);

        if (command === `potion`) {
            let healthRestored = Math.min(number, 100 - health);
            health += healthRestored;
            if (health > 100) {
                health = 100;
            }
            console.log(`You healed for ${healthRestored} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        else if (command === `chest`) {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        }
        else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            }
            else if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            }
        }
        bestRoom++;
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
