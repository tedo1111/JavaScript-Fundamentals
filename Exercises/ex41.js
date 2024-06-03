function ex41(arr) {
    let maxN = arr[0];
    let newArr = [maxN];

    for (let i = 1; i < arr.length; i++) {
        let curEl = arr[i];


        if (curEl >= maxN) {
            maxN = curEl;
            newArr.push(maxN);
        }

    }

    console.log(newArr.join(" "));
}
ex41([1, 3, 8, 4, 10, 12, 3, 2, 24]);
ex41([1, 2, 3, 4]);
ex41([20, 3, 2, 15, 6, 1]);