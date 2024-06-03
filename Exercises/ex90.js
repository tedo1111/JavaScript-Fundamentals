function ex90(input) {

    let garages = {};

    for (let line of input) {
        let [garageNum, carInfo] = line.split(' - ');
        let carDetails = carInfo.split(', ');

        if (!garages.hasOwnProperty(garageNum)) {
            garages[garageNum] = [];
        }

        let car = {};
        for (let detail of carDetails) {
            let [key, value] = detail.split(': ');
            car[key] = value;
        }

        garages[garageNum].push(car);
    }

    let sortedGarages = Object.keys(garages).sort((a, b) => a - b);

    for (let garage of sortedGarages) {
        console.log(`Garage № ${garage}`);
        for (let car of garages[garage]) {
            let carDetails = Object.entries(car).map(([key, value]) => `${key} - ${value}`);
            console.log(`--- ${carDetails.join(', ')}`);
        }
    }

}
ex90(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);