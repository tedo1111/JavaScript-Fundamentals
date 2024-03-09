function adddressBook(arr) {

    let adddreses = {};

    for (let el of arr) {

        let [name, adddress] = el.split(":");

        adddreses[name] = adddress;

    }

    let sorted = Object.entries(adddreses);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (const name of sorted) {

        console.log(`${name[0]} -> ${[name[1]]}`);

    }

}
adddressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
// adddressBook(['Bob:Huxley Rd',
//     'John:Milwaukee Crossing',
//     'Peter:Fordem Ave',
//     'Bob:Redwing Ave',
//     'George:Mesta Crossing',
//     'Ted:Gateway Way',
//     'Bill:Gateway Way',
//     'John:Grover Rd',
//     'Peter:Huxley Rd',
//     'Jeff:Gateway Way',
//     'Jeff:Huxley Rd']
// );