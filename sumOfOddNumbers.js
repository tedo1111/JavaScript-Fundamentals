function sumOfOddNumbers(n) {

    let sum = 0;

    // for (let i = 1; i <= n; i++) {
    //     if (i % 2 !== 0) {
    //         console.log(i);
    //     }
    // }

    let counter = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            counter++;
            console.log(i);
            sum += i;
            if (counter === n) {
                break;

            }

        }

    }
    console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(5);
sumOfOddNumbers(3);