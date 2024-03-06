function towns(arr) {

    for (let el of arr) {
        let [city, latitude, longitude] = el.split(" | ");

        let latitudeAsNum = Number(latitude).toFixed(2);
        let longitudeAsNum = Number(longitude).toFixed(2);

        let townInfo = {
            town: city,
            latitude: latitudeAsNum,
            longitude: longitudeAsNum,
        };
        console.log(townInfo);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
// towns(['Plovdiv | 136.45 | 812.575']);
