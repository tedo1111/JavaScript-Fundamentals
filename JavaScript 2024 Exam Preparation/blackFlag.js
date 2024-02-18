function test(input) {

    let days = Number(input.shift());
    let daylyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());

    let dayCounter = 0;
    let total = 0;
    for (let i = 0; i < days; i++) {

        total += daylyPlunder;
        dayCounter++;
        if (dayCounter % 3 === 0) {
            let additinal = daylyPlunder * 0.5;
            total += additinal;
        }

        if (dayCounter % 5 === 0) {
            let lose = total * 0.3;
            total -= lose;
        }
    }

    if (total >= expectedPlunder) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    }
    else {
        let left = total / expectedPlunder * 100;
        console.log(`Collected only ${left.toFixed(2)}% of the plunder.`);
    }
}
test((["5",
    "40",
    "100"])
);
test((["10",
    "20",
    "380"])
);
