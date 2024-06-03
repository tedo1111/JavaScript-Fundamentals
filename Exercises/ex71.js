function ex71(employeeNames) {

    let employees = {};

    for (let name of employeeNames) {
        employees[name] = name.length;
    }

    for (let name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}
ex71([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);