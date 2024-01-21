function sumDigits(num) {

    let numAsString = num.toString();
    let res = 0;

    for (let i = 0; i < numAsString.length; i++) {
        res += Number(numAsString[i]);
    }

    let result = res.toString();
    console.log(result);

}
sumDigits(245678);
// sumDigits(97561);
// sumDigits(543);