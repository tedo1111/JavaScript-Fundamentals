function piccolo(input) {
    let obj = [];

    for (let el of input) {
        let [direction, carNumber] = el.split(", ");

        if (direction === 'IN') {
            if (!obj.includes(carNumber)) {
                obj.push(carNumber);
            }
        } else if (direction === 'OUT') {
            let indexToRemove = obj.indexOf(carNumber);
            if (indexToRemove !== -1) {
                obj.splice(indexToRemove, 1);
            }
        }
    }

    obj.sort();

    if (obj.length === 0) {
        console.log('Parking Lot is Empty');
        return;
    }

    for (let carNumber of obj) {
        console.log(carNumber);
    }
}
piccolo(['IN, CA2844AA',
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
piccolo();