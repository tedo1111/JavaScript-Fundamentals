function ex105(input) {



    const pattern = /%(?<customer>[A-Z][a-z]+)%.*<(?<product>\w+)>.*\|(?<count>\d+)\|.*?(?<price>\d+(\.\d+)?)\$/;
    let totalIncome = 0;

    for (const line of input) {
        if (line === 'end of shift') {
            break;
        }

        const match = pattern.exec(line);
        if (match) {
            const customer = match.groups.customer;
            const product = match.groups.product;
            const count = Number(match.groups.count);
            const price = Number(match.groups.price);
            const totalPrice = count * price;

            totalIncome += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
ex105(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);