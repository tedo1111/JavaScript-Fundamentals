function ex104(input) {

    const participants = input[0].split(', ');
    const raceData = input.slice(1);
    const racers = {};

    for (const line of raceData) {
        if (line === 'end of race') {
            break;
        }

        const nameMatch = line.match(/[A-Za-z]/g);
        const distanceMatch = line.match(/\d/g);

        if (nameMatch && distanceMatch) {
            const name = nameMatch.join('');
            const distance = distanceMatch.map(Number).reduce((a, b) => a + b, 0);

            if (participants.includes(name)) {
                if (!racers[name]) {
                    racers[name] = 0;
                }
                racers[name] += distance;
            }
        }
    }

    const sortedRacers = Object.entries(racers)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    const positions = ['1st place', '2nd place', '3rd place'];
    sortedRacers.forEach((racer, index) => {
        console.log(`${positions[index]}: ${racer[0]}`);
    });

}
ex104(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);