function ex48(num) {

    let numAsStr = num.toString();

    let evenSum = 0;
    let oddSum = 0;

    for (let el of numAsStr) {

        let digit = Number(el);

        if (digit % 2 === 0) {
            evenSum += digit
        }
        else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
ex48(1000435);
// ex48(3495892137259234);