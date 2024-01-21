function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {


        let currN = i;
        let sumOfDigits = 0;

        while (currN > 0) {
            sumOfDigits += currN % 10;

            currN = Math.trunc(currN / 10);
        }

        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            console.log(`${i} -> True`);
        }
        else {
            console.log(`${i} -> False`);
        }

    }

}
specialNumbers(15);
specialNumbers(20);