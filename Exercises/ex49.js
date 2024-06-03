function ex49(arr) {

    for (let nums of arr) {

        let isPalindrom = checkIsPalindrom(nums);
        console.log(isPalindrom);


    }
    function checkIsPalindrom(number) {
        let numAsString = number.toString();
        let reversedNum = numAsString.split("").reverse().join("");


        if (numAsString === reversedNum) {
            return true;
        }
        else {
            return false;
        }
    }

}
ex49([123, 323, 421, 121]);