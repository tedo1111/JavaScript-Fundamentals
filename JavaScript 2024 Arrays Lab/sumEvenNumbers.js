function sumEvenNumbers(arr) {

    let sumOfEven = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num % 2 === 0) {
            sumOfEven += Number(num);
        }
    }
    console.log(sumOfEven);

}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);