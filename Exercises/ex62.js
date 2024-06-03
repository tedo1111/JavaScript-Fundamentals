function ex62(arr) {

    let guests = [];

    for (let command of arr) {

        let name = command.split(" ")[0];

        if (command.includes(`not`)) {
            if (guests.includes(name)) {
                let idx = guests.indexOf(name);
                guests.splice(idx, 1);
            }
            else {
                console.log(`${name} is not in the list!`);
            }
        }
        else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
            else {
                guests.push(name);

            }
        }
    }


    console.log(guests.join("\n"));
}
ex62(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
