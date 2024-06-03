function ex84(input) {

    let parkingLot = {};

    input.forEach(entry => {
        let [direction, carNumber] = entry.split(", ");
        if (direction === "IN") {
            parkingLot[carNumber] = true;
        } else {
            delete parkingLot[carNumber];
        }
    });

    let parkedCars = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b));

    if (parkedCars.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(parkedCars.join("\n"));
    }
}
ex84(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);