function ex46(n1, n2, n3) {

    let res1 = sum(n1, n2);

    let res = subtract(res1, n3);

    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    console.log(res);


}
ex46(23,
    6,
    10
);