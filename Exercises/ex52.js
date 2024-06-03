function ex52(n1, n2) {


    let fact1 = calcultaeFact(n1);
    let fact2 = calcultaeFact(n2);

    let res = fact1 / fact2;

    console.log(res.toFixed(2));

    function calcultaeFact(num) {
        let fact = 1;

        while (num > 1) {
            fact *= num;
            num--;
        }
        return fact;
    }


}
ex52(5, 2);
ex52(6, 2);