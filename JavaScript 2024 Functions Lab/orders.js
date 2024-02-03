function orders(product, quantity) {

    let total = 0;
    switch (product) {
        case `coffee`:
            total = 1.5 * quantity;
            break;
        case `water`:
            total = 1 * quantity;
            break;
        case `coke`:
            total = 1.4 * quantity;
            break;
        case `snacks`:
            total = 2 * quantity;
            break;
    }

    console.log(total.toFixed(2));

}
orders("water", 5);
orders("coffee", 2);
