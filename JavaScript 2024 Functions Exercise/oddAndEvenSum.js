function oddAndEvenSum(number) {

    numAsString = String(number);

    let oddSum = 0;
    let evenSum = 0;


    for (let el of numAsString) {

        if (el % 2 === 0) {
            evenSum += Number(el);
        }
        else {
            oddSum += Number(el);
        }

    }

    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);