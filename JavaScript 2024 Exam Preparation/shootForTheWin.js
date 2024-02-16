function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    let count = 0;

    for (let command of input) {
        if (command === 'End') {
            break;
        }

        let index = Number(command);

        if (index >= 0 && index < targets.length && targets[index] !== -1) {
            let shotValue = targets[index];
            targets[index] = -1;
            count++;

            for (let i = 0; i < targets.length; i++) {
                if (targets[i] !== -1 && i !== index) {
                    if (targets[i] > shotValue) {
                        targets[i] -= shotValue;
                    } else {
                        targets[i] += shotValue;
                    }
                }
            }
        }
    }

    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}




shootForTheWin((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
);
shootForTheWin((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
);