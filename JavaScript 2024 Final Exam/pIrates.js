function pIrates(input) {

    let cities = {};
    let citiesArray = [];


    while (input[0] !== `Sail`) {

        let commnad = input.shift().split("||");
        let city = commnad[0];
        let population = Number(commnad[1]);
        let gold = Number(commnad[2]);

        let result = citiesArray.find(e => e.city === city);
        let index = citiesArray.indexOf(result);

        if (result) {
            citiesArray[index].population += population;
            citiesArray[index].gold += gold;
        }
        else {
            cities = { city, population, gold };
            citiesArray.push(cities)
        }
    }

    input.shift();

    let curEl = input.shift();
    while (curEl !== `End`) {

        let commnad = curEl.split("=>");
        let currCommand = commnad.shift();


        switch (currCommand) {
            case `Plunder`:
                let cityName = commnad[0];
                let people = Number(commnad[1]);
                let gold = Number(commnad[2]);

                console.log(`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                let result = citiesArray.find(e => e.city === cityName);
                let index = citiesArray.indexOf(result);

                citiesArray[index].population -= people;
                citiesArray[index].gold -= gold;

                if (citiesArray[index].population <= 0 || citiesArray[index].gold <= 0) {
                    citiesArray.splice(index, 1);
                    console.log(`${cityName} has been wiped off the map!`);
                }
                break;

            case 'Prosper':
                let town = commnad[0];
                let tresure = Number(commnad[1]);

                if (tresure < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    let result = citiesArray.find(e => e.city === town);
                    let index = citiesArray.indexOf(result);

                    citiesArray[index].gold += tresure;
                    console.log(`${tresure} gold added to the city treasury. ${town} now has ${citiesArray[index].gold} gold.`);
                }
                break;
        }



        curEl = input.shift();
    };

    if (citiesArray.length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
    else {
        console.log(`Ahoy, Captain! There are ${citiesArray.length} wealthy settlements to go to:`);
        for (let el of citiesArray) {
            console.log(`${el.city} -> Population: ${el.population} citizens, Gold: ${el.gold} kg`);
        }
    }

}
pIrates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
);
// pIrates((["Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"])
// );