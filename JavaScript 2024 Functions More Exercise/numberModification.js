function numberModification(number) {

    let numberAsString = String(number);

    let res = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        res += Number(numberAsString[i]);

    }
    let avg = res / numberAsString.length;

    while (avg <= 5) {
        numberAsString += '9';
        res += 9;
        avg = res / (numberAsString.length);
    }


    console.log(numberAsString);


}
numberModification(101);
// numberModification(5835);