function travelTime(input) {

    let destinations = {};

    for (let el of input) {

        let [countryName, townName, travelcost] = el.split(" > ");
        travelcost = Number(travelcost);


        if (!destinations.hasOwnProperty(countryName)) {
            destinations[countryName] = {};
        }

        if (!destinations[countryName].hasOwnProperty(townName)) {
            destinations[countryName][townName] = travelcost;
        }
        else {
            destinations[countryName][townName] = Math.min(destinations[countryName][townName], travelcost);
        }
    }

    let sortedCountries = Object.entries(destinations)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .reduce((acc, [country, towns]) => {
            let sortedTowns = Object.entries(towns)
                .sort((a, b) => a[1] - b[1])
                .map(([town, cost]) => `${town} -> ${cost}`);

            acc.push(`${country} -> ${sortedTowns.join(' ')}`);
            return acc;
        }, []);

    console.log(sortedCountries.join('\n'));
}
travelTime(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]

);
// travelTime([
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Varna > 25010',
//     'Bulgaria > Lukovit > 10'
// ]
// );
