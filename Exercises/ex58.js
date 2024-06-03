function ex58(input) {
    const targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let thickness = input[i];
        console.log(`Processing chunk ${thickness} microns`);

        thickness = processChunk(thickness, targetThickness);
        console.log(`Finished crystal ${thickness} microns`);
    }

    function processChunk(thickness, target) {
        const operations = [
            { name: 'Cut', func: (x) => x / 4, condition: (x) => x / 4 >= target },
            { name: 'Lap', func: (x) => x * 0.8, condition: (x) => x * 0.8 >= target },
            { name: 'Grind', func: (x) => x - 20, condition: (x) => x - 20 >= target },
            { name: 'Etch', func: (x) => x - 2, condition: (x) => x - 2 >= target },
        ];

        for (const operation of operations) {
            let count = 0;
            while (operation.condition(thickness)) {
                thickness = operation.func(thickness);
                count++;
            }
            if (count > 0) {
                console.log(`${operation.name} x${count}`);
                thickness = transportAndWash(thickness);
            }
        }

        // Apply Etch until we get close to target
        let etchCount = 0;
        while (thickness - 2 >= target - 1) {
            thickness -= 2;
            etchCount++;
        }
        if (etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            thickness = transportAndWash(thickness);
        }

        // If thickness is exactly one less than target, apply X-ray
        if (thickness < target) {
            thickness += 1;
            console.log(`X-ray x1`);
        }

        return thickness;
    }

    function transportAndWash(thickness) {
        console.log(`Transporting and washing`);
        return Math.floor(thickness);
    }
}
ex58([1375, 50000]);
// ex58([1000, 4000, 8100]);