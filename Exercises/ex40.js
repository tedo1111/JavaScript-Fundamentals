function ex40(arr) {

    let n = arr.pop();

    for (let i = 0; i < n; i++) {
        let curEl = Number(arr[i]);

        let c = arr.pop();
        arr.unshift(c);
    }

    if (typeof (arr) === String) {
        console.log(arr);
    }
    else {
        console.log(arr.join(" "));
    }

}
ex40(['1', '2', '3', '4', '2']);
ex40(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
