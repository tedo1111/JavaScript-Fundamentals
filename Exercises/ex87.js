function ex87(input) {
    let companies = {};

    for (let line of input) {
        let [company, employeeId] = line.split(' -> ');

        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }

        companies[company].add(employeeId);
    }

    let sortedCompanies = Object.keys(companies).sort((a, b) => a.localeCompare(b));

    for (let company of sortedCompanies) {
        console.log(company);
        for (let id of Array.from(companies[company])) {
            console.log(`-- ${id}`);
        }
    }
}
ex87([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);