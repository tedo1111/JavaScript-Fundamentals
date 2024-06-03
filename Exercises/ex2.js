function ex2(input, count) {

    let res = 0;

    if (count > 15) {
        count = 15;
    }
    res = input.toFixed(count);
    res = parseFloat(res);

    console.log(res);

}
ex2(3.1415926535897932384626433832795, 2);
ex2(10.5, 3);
