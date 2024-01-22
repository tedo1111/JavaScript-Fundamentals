function gladiatorExpenses(lostFights, helmetPrice, swordPirce, shieldPrice, armorPrice) {

    let helmet = 0;
    let sword = 0;
    let shield = 0;
    let armor = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmet++;
        }

        if (i % 3 === 0) {
            sword++;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            shield++;

        }
    }

    armor = Math.floor(shield / 2);

    let total = helmet * helmetPrice + sword * swordPirce + shield * shieldPrice + armor * armorPrice;

    console.log(`Gladiator expenses: ${(total).toFixed(2)} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);