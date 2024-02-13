function houseParty(arr) {


    let list = [];

    for (let i = 0; i < arr.length; i++) {
        let elements = arr[i].split(' ');


        let name = elements[0];


        if (elements.length === 3) {
            if (!list.includes(name)) {
                list.push(name);
            }
            else {
                console.log(`${name} is already in the list!`);
            }
        }
        else if (elements.length === 4) {
            if (!list.includes(name)) {
                console.log(`${name} is not in the list!`);
            }
            else {
                let findName = list.indexOf(name);

                list.splice(findName, 1);
            }


        }


    }

    console.log(list.join(`\n`));
}
// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']
// );
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);