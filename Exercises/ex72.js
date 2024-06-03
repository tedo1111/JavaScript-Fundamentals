function ex72(arr) {


    for (let info of arr) {

        let [name, cord1, cord2] = info.split(" | ");

        let coordinate1 = Number(cord1).toFixed(2);
        let coordinate2 = Number(cord2).toFixed(2);


        let townObj = { town: name, latitude: coordinate1, longitude: coordinate2 };

        console.log(townObj);


    }


}
ex72(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);