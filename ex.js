function ex(products) {

    let listProducts = [];

    for (let i = 0; i < products.length; i++) {
        let [name, price] = products[i].split(" : ");
        listProducts.push({ name, price: Number(price) });
    }

    listProducts.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    let groupedProduts = {};


    for (let i = 0; i < listProducts.length; i++) {
        let initial = listProducts[i].name[0].toUpperCase();
        if (!groupedProduts[initial]) {
            groupedProduts[initial] = [];
        }
        groupedProduts[initial].push(listProducts[i]);
    }

    Object.keys(groupedProduts).forEach(initial => {
        console.log(initial);
        groupedProduts[initial].forEach(products => {
            console.log(`  ${products.name}: ${products.price}`);
        })
    })

}
ex([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);
