function carWash(commands) {

    let percentageSum = 0;

    for (const command of commands) {

        if (command === `soap`) {
            percentageSum += 10
        }
        else if (command === `water`) {
            percentageSum *= 1.20;
        }
        else if (command === `vacuum cleaner`) {
            percentageSum *= 1.25
        }
        else if (command === `mud`) {
            percentageSum = percentageSum - (percentageSum / 10);
        }

    }

    console.log(`The car is ${percentageSum.toFixed(2)}% clean.`);
}
carWash([`soap`, `mud`]);
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);