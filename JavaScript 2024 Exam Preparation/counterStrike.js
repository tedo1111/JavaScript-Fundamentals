function counterStrike(input) {

    let energy = Number(input.shift());
    let curEl = input.shift();
    let winCounter = 0;

    while (curEl !== 'End of battle') {

        if (energy >= Number(curEl)) {
            energy -= Number(curEl);
            winCounter++;
        } else {
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`);
            return;
        }

        energy += winCounter % 3 === 0 ? winCounter : 0;

        curEl = input.shift();
    }

    console.log(`Won battles: ${winCounter}. Energy left: ${energy}`);
}
counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
);
counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
);
