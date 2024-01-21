function amazingNumbers(num) {

    let numString = num.toString();
    let res = 0;

    for (let i = 0; i < numString.length; i++) {
        res += Number(numString[i]);
    }

    let result = res.toString().includes('9');

    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

}
amazingNumbers(1233);
amazingNumbers(999);