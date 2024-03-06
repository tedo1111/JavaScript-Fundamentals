function employees(obj) {

    for (let el of obj) {

        console.log(`Name: ${el} -- Personal Number: ${el.length}`);

    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
// employees([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
// ]
// );
