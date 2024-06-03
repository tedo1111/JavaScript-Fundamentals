function ex106(input) {



    let n = parseInt(input[0]);
    let messages = input.slice(1);
    let attackedPlanets = [];
    let destroyedPlanets = [];

    messages.forEach(message => {
        let decryptionKey = (message.match(/[star]/gi) || []).length;
        let decryptedMessage = message.split('').map(char => String.fromCharCode(char.charCodeAt(0) - decryptionKey)).join('');

        let regex = /@(?<planet>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<attackType>A|D)![^@:!\->]*->(?<soldierCount>\d+)/;
        let match = regex.exec(decryptedMessage);

        if (match) {
            let { planet, attackType } = match.groups;
            if (attackType === 'A') {
                attackedPlanets.push(planet);
            } else if (attackType === 'D') {
                destroyedPlanets.push(planet);
            }
        }
    });

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));
}
ex106(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
);