function simpleCalculator(numOne, numTwo, operator) {

    let res = 0;

    switch (operator) {
        case 'multiply':
            res = numOne * numTwo;
            break;
        case 'divide':
            res = numOne / numTwo;
            break;
        case 'add':
            res = numOne + numTwo;
            break;
        case 'subtract':
            res = numOne - numTwo;
            break;
    }

    console.log(res);

}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');