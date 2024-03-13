function aMinerTask(input) {

    let obj = {};


    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!obj.hasOwnProperty(resource)) {
            obj[resource] = quantity;
        }
        else {
            obj[resource] += quantity;
        }
    }

    for (let resource in obj) {

        console.log(`${resource} -> ${obj[resource]}`);
    }

}
// aMinerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ]
// );
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
);