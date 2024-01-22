function spiceMustFlow(starting) {

    let days = 0;

    let spices = starting;
    let forWorkers = 26;

    let totalSpices = 0;
    let totalYield = starting;

    let forPeople = 0;

    let finalResult = 0;


    forPeople = totalYield - 26;
    while (spices >= 100) {

        totalSpices = spices - forWorkers;
        finalResult += totalSpices;
        totalYield = spices - 10;
        spices = totalYield;

        days++;
    }
    let result = 0;

    if (totalSpices > 26) {
        result = finalResult - 26;
    }

    console.log(days);
    console.log(result);
}
// spiceMustFlow(111);
spiceMustFlow(450);