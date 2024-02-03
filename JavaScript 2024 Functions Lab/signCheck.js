function signCheck(n1, n2, n3) {


    function n1Andn2(first, sec) {
        return first * sec;
    }
    n1Andn2();

    let firstAndSecResult = n1Andn2(n1, n2);

    let res = firstAndSecResult * n3;

    if (res > 0) {
        console.log(`Positive`);
    }
    else {
        console.log(`Negative`);
    }

}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);