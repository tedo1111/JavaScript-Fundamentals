function ex38(arr) {

    let step = Number(arr.pop());

    let res = '';

    for (let i = 0; i < arr.length; i += step) {
        res += (arr[i] + " ");
    }
    console.log(res);

}
ex38(['5', '20', '31', '4', '20', '2']);
ex38(['dsa', 'asd', 'test', 'test', '2']);
ex38(['1', '2', '3', '4', '5', '6']);