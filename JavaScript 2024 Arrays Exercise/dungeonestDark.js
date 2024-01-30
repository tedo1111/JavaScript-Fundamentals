function dungeonestDark(arr) {

    let arrInfo = arr.shift();
    let rooms = arrInfo.split("|");

    let coins = 0;
    let health = 100;
    let currHealth = 0;

    let roomCounter = 0;

    for (let room of rooms) {
        roomCounter++;
        let item = room.split(" ");
        let command = item[0];
        let numbs = Number(item[1]);

        if (command === `potion`) {
            currHealth = (100 - health);

            health += numbs;
            if (health > 100) {
                numbs = currHealth;
                health = 100;
            }
            console.log(`You healed for ${numbs} hp.`);
            console.log(`Current health: ${health} hp.`);

        }
        else if (command === `chest`) {

            coins += numbs;
            console.log(`You found ${numbs} coins.`);

        }
        else {
            let name = command;
            health -= numbs;
            if (health > 0) {
                console.log(`You slayed ${name}.`);

            }

            else {
                console.log(`You died! Killed by ${name}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            }


        }
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }



}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
