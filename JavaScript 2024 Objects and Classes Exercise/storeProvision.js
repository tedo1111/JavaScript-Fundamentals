function storeProvision(arr1, arr2) {

    let obj = {};

    for (let i = 0; i < arr1.length; i += 2) {
        let k = arr1[i];
        let v = Number(arr1[i + 1]);
        obj[k] = v;
    }



    for (let i = 0; i < arr2.length; i += 2) {
        let k = arr2[i];
        if (!obj.hasOwnProperty(k)) {
            obj[k] = 0;
        }
        obj[k] += Number(arr2[i + 1]);
    }


    for (const name in obj) {

        console.log(`${name} -> ${obj[name]}`);

    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]

);