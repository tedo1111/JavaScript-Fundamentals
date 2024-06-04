function fruit(name, gr, kg) {

    let res = gr * kg / 1000;
    grToKg = gr / 1000;

    console.log(`I need $${res.toFixed(2)} to buy ${grToKg.toFixed(2)} kilograms ${name}.`);


}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
