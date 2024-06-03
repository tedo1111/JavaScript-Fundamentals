function ex89(input) {
    let destinations = {};

    for (let line of input) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);

        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
        }

        if (!destinations[country].hasOwnProperty(town) || destinations[country][town] > cost) {
            destinations[country][town] = cost;
        }
    }

    let sortedCountries = Object.keys(destinations).sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountries) {
        let towns = Object.entries(destinations[country]).sort((a, b) => a[1] - b[1]);

        let output = `${country} -> `;
        for (let [town, cost] of towns) {
            output += `${town} -> ${cost} `;
        }
        console.log(output.trim());
    }
}
ex89([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
);