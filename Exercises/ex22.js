function ex22(loses, helmetPrice, swordPrice, shiledPrice, armorPrice) {

    let counter = 0;
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;

    for (let i = 1; i <= loses; i++) {
        if (i % 2 === 0) {
            c1++;
        } if (i % 3 === 0) {
            c2++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            c3++;
            if (c3 % 2 === 0) {
                c4++;
            }
        }
    }

    let total = c1 * helmetPrice + c2 * swordPrice + c3 * shiledPrice + c4 * armorPrice;

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);

}
// ex22(7,
//     2,
//     3,
//     4,
//     5
// );
ex22(23,
    12.50,
    21.50,
    40,
    200
);