function examPreperaion3(input) {

    let stock = {};
    let soldCount = 0;

    for (let command of input) {
        let [action, quantity, food] = command.split(" ");

        if (action === "Receive") {
            quantity = parseInt(quantity);
            if (quantity <= 0) continue;

            if (stock.hasOwnProperty(food)) {
                stock[food] += quantity;
            } else {
                stock[food] = quantity;
            }
        } else if (action === "Sell") {
            quantity = parseInt(quantity);
            if (!stock.hasOwnProperty(food)) {
                console.log(`You do not have any ${food}.`);
                continue;
            } else if (stock[food] < quantity) {
                console.log(`There aren't enough ${food}. You sold the last ${stock[food]} of them.`);
                soldCount += stock[food];
                delete stock[food];
                continue;
            }

            stock[food] -= quantity;
            if (stock[food] === 0) {
                delete stock[food];
            }
            soldCount += quantity;
            console.log(`You sold ${quantity} ${food}.`);
        } else if (action === "Complete") {
            break;
        }
    }

    for (let food in stock) {
        console.log(`${food}: ${stock[food]}`);
    }
    console.log(`All sold: ${soldCount} goods`);
}
examPreperaion3(["Receive 105 cookies",
    "Receive 10 donuts",
    "Sell 10 donuts",
    "Sell 1 bread",
    "Complete"
]);

// examPreperaion3(["Receive 10 muffins",
//     "Receive 23 bagels",
//     "Sell 5 muffins",
//     "Sell 10 bagels",
//     "Complete"
// ])