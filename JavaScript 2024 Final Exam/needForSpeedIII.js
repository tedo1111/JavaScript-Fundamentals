function needForSpeedIII(input) {

    let cars = Number(input.shift());

    let automobile = {};

    for (let i = 0; i < cars; i++) {
        let carStr = input[i];

        let [car, distance, fuel] = carStr.split("|");

        automobile[car] = { distance: Number(distance), fuel: Number(fuel) };
    }

    let command = input.shift();

    while (command !== `Stop`) {

        let tokens = command.split(" : ");

        let driveCommand = tokens.shift();

        if (driveCommand === 'Drive') {
            let [car, distance, fuel] = tokens;
            distance = Number(distance);
            fuel = Number(fuel);

            if (automobile.hasOwnProperty(car) && fuel <= automobile[car].fuel) {
                automobile[car].distance += distance;
                automobile[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (automobile[car].distance >= 100000) {
                    delete automobile[car];
                    console.log(`Time to sell the ${car}!`);
                }
            } else {
                console.log("Not enough fuel to make that ride");
            }
        }
        else if (driveCommand === `Refuel`) {
            let [car, fuel] = tokens;
            fuel = Number(fuel);

            let currentFuel = automobile.hasOwnProperty(car) ? automobile[car].fuel : 0;
            let refueledAmount = Math.min(75 - currentFuel, fuel);
            automobile[car].fuel += refueledAmount;
            console.log(`${car} refueled with ${refueledAmount} liters`);

        }
        else if (driveCommand === `Revert`) {

            let [car, kilometers] = tokens;
            kilometers = Number(kilometers);
            if (automobile.hasOwnProperty(car)) {
                automobile[car].distance -= kilometers;
                if (automobile[car].distance < 10000) {
                    automobile[car].distance = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }

            }
        }

        command = input.shift();
    }
    let entries = Object.entries(automobile);


    for (let [carName, carInfo] of entries) {
        console.log(`${carName} -> Mileage: ${carInfo.distance} kms, Fuel in the tank: ${carInfo.fuel} lt.`);
    }

}
needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
);
// needForSpeedIII([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ]
// );