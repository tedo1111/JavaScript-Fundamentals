function computerStore(input) {

    let list = input.shift();

    let sum = 0;

    let type = input.slice(-1)[0]

    if (type === `special`) {
        while (list !== `special`) {
            if (list > 0) {
                sum += Number(list);
            } else {
                console.log(`Invalid price!`);
            }
            list = input.shift();
        }
    }
    else {
        while (list !== `regular`) {
            if (list > 0) {
                sum += Number(list);
            }
            else {
                console.log(`Invalid price!`);
            }
            list = input.shift();
        }
    }

    let total = 0;
    let taxes = 0;
    let discount = 0;
    if (type === `regular`) {
        taxes = 0.2 * sum;
        discount = total * 0.2;
        total = taxes + sum;
    }
    else {
        taxes = (0.2 * sum);
        total = sum + taxes;
        discount = (total * 0.1);
        total -= discount;
    }


    if (total === 0) {
        console.log(`Invalid order!`);
    }
    else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${total.toFixed(2)}$`);
    }

}
// computerStore(([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ])
// );
// computerStore(([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30', 'regular'
// ])
// );
computerStore(([
    'regular'
])
);