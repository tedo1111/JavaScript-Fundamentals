function companyUsers(input) {

    let obj = {};

    for (let el of input) {

        let [name, id] = el.split(" -> ");

        if (name in obj) {

            if (!obj[name].includes(id)) {
                obj[name].push(id);

            }
        }
        else {
            obj[name] = [id];
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, emplID] of sorted) {

        console.log(name);

        for (let id of emplID) {
            console.log(`-- ${id}`);
        }
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);
companyUsers();