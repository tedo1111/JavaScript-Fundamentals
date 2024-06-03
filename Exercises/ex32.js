function ex32(arr1, arr2) {

    let resArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let res = (arr1[i]);
        let res2 = (arr2[i]);

        if (i % 2 === 0) {
            let r = Number(res) + Number(res2);
            resArr.push(r);
        }
        else {
            let r = (res) + (res2);
            resArr.push((r));
        }
    };

    console.log(resArr.join(" - "));

}
ex32(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
ex32(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);