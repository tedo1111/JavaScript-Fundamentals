function ex86(input) {

    let players = {};

    for (let line of input) {
        let [name, cardsStr] = line.split(': ');
        let cards = cardsStr.split(', ');

        if (!players.hasOwnProperty(name)) {
            players[name] = [];
        }

        for (let card of cards) {
            if (!players[name].includes(card)) {
                players[name].push(card);
            }
        }
    }

    for (let player in players) {
        let totalValue = 0;
        for (let card of players[player]) {
            let power = card.substring(0, card.length - 1);
            let type = card[card.length - 1];
            totalValue += calculateCardValue(power, type);
        }
        console.log(`${player}: ${totalValue}`);
    }

    function calculateCardValue(power, type) {
        let powers = {
            '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
        };
        let types = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
        return powers[power] * types[type];
    }
}
ex86([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
);