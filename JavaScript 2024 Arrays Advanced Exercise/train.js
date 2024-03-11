function train(arr) {

    let wagons = arr[0].split(" ").map(Number);

    let maxx = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {

        let command = arr[i];

        let element = command.split(" ");

        if (element[0] === 'Add') {
            let passangers = Number(element[1]);
            wagons.push(passangers);
        }
        else {
            let passangers = Number(element[0]);
            for (let i in wagons) {
                if (wagons[i] + passangers <= maxx) {
                    wagons[i] += passangers;
                    break;
                }
            }

        }

    }

    console.log(wagons.join(" "));

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);
// train(['0 0 0 10 2 4',
//     '10',
//     'Add 10',
//     '10',
//     '10',
//     '10',
//     '8',
//     '6']
// );