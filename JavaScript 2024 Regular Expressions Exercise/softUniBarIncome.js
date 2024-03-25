function softUniBarIncome(arr) {

    let curel = arr.shift();

    let income = 0;

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;

    while (curel !== `end of shift`) {

        let match = curel.match(pattern);

        if (match) {

            let { name, product, count, price } = match.groups;

            let totalPrice = Number(count) * Number(price);

            income += totalPrice;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }



        curel = arr.shift();
    }

    
    console.log(`Total income: ${income.toFixed(2)}`);

}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);
// softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift']
// );
