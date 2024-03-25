function furniture(arr) {

    let items = [];
    let totalPrice = 0;

    let curEl = arr.shift();

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d*)/;

    while (curEl !== `Purchase`) {


        let match = curEl.match(pattern);


        if (match) {

            let { name, price, qty } = match.groups;

            price = Number(price);
            qty = Number(qty);

            let furnichurPrice = price * qty;

            items.push(name);
            totalPrice += furnichurPrice;

        }

        curEl = arr.shift();
    }

    console.log(`Bought furniture:`);
    if (items.length > 0) {
        console.log(items.join(`\n`));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);
// furniture(['>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase']
// );