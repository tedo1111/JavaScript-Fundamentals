function palindromeIntegers(arr) {

    for (const num of arr) {


        let arrToStr = String(num);

        let reverseNum = arrToStr.split("").reverse().join("");

        if (reverseNum === arrToStr) {
            console.log(`true`);
        }
        else {
            console.log(`false`);
        }
    }


}
palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);