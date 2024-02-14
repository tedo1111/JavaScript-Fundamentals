function blackFlag(input) {

    let days = Number(input[0]);
    let daylyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);


    let total = 0;

    for (let i = 1; i <= days; i++) {
        // console.log(i);

        total += daylyPlunder;

        if (i % 3 === 0) {
            total += daylyPlunder * 0.5;
        }

        if (i % 5 === 0) {
            total -= total * 0.3;
        }


    }

    if (total >= expectedPlunder) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    }
    else {
        let percLeft = total / expectedPlunder * 100;

        console.log(`Collected only ${percLeft.toFixed(2)}% of the plunder.`);
    }

}
blackFlag((["5", "40", "100"]));
blackFlag((["10", "20", "380"]));