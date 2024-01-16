function bitcoinMining(bc) {

    let dayCounter = 0;
    let money = 0;
    let goldPirce = 67.51;
    let bitcoinPrice = 11949.16;
    let bitcoinCounter = 0;
    let firstDay = 0;
    let grams = 0;

    for (let i = 0; i < bc.length; i++) {

        grams = Number(bc[i]);
        dayCounter++;

        if (dayCounter % 3 === 0) {
            let stolenGold = grams * 0.3;
            grams -= stolenGold;
        }

        money += grams * goldPirce;

        while (money >= bitcoinPrice) {

            money -= bitcoinPrice;
            bitcoinCounter++;

            if (bitcoinCounter === 1) {
                firstDay = dayCounter;
            }

        }

    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (firstDay > 0) {

        console.log(`Day of the first purchased bitcoin: ${firstDay}`);

    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);