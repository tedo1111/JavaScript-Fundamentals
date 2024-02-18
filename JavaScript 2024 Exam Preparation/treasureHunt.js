function treasureHunt(input) {
    let treasureChest = input.shift().split('|');

    for (let command of input) {
        if (command === 'Yohoho!') {
            break;
        }

        let [action, ...args] = command.split(' ');

        if (action === 'Loot') {
            for (let item of args) {
                if (!treasureChest.includes(item)) {
                    treasureChest.unshift(item);
                }
            }
        } else if (action === 'Drop') {
            let index = Number(args[0]);
            if (index >= 0 && index < treasureChest.length) {
                let dropped = treasureChest.splice(index, 1)[0];
                treasureChest.push(dropped);
            }
        } else if (action === 'Steal') {
            let count = Number(args[0]);
            let stolenItems = treasureChest.splice(-count);
            console.log(stolenItems.join(', '));
        }
    }

    if (treasureChest.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        let totalLength = treasureChest.join('').length;
        let averageGain = totalLength / treasureChest.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
);
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
);