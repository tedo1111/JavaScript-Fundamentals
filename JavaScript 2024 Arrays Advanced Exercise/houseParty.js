function houseParty(arr) {

    let guests = [];

    for (const el of arr) {
        let elemets = el.split(" ");

        let name = elemets[0];

        if (elemets.length === 3) {

            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
            else {
                guests.push(name);
            }
        }
        else if (elemets.length === 4) {

            let index = guests.indexOf(name);
            if (index !== -1) {
                guests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }

        }


    }


    console.log(guests.join('\n'));

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
