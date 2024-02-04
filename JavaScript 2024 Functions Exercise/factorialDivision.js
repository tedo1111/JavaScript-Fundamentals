function factorialDivision(num1, num2) {

    let res1 = num1Fact(num1);
    let res2 = num2Fact(num2);

    let total = res1 / res2;

    console.log(total.toFixed(2));

    function num1Fact(num1) {
        if (num1 <= 1) {
            return 1;
        }
        return num1 * num1Fact(num1 - 1);
    }



    function num2Fact(num2) {
        if (num2 <= 1) {
            return 1;
        }
        return num2 * num2Fact(num2 - 1);
    }


}
factorialDivision(5, 2);
factorialDivision(6, 2);
