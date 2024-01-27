function binaryToDecimal(num) {

    let numString = num.split("");
    let decimal = 0;

    let power = numString.length - 1;

    for (let i = 0; i < numString.length; i++) {
        decimal += Number(numString[i] * Math.pow(2, power));
        power--;
    }
    console.log(decimal);

}
binaryToDecimal('00001001');
binaryToDecimal('11110000');