function city(obj) {

    // --------1-----------

    // for (let key of Object.keys(obj)) {
    //     console.log(`${key} -> ${obj[key]}`);
    // }

    //-------------2------------

    for (let [key, values] of Object.entries(obj)) {
        console.log(`${key} -> ${values}`);
    }


}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);