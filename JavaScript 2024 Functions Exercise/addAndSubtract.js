function addAndSubtract(first, second, last) {


    let tempRes = firstPlusSecond(first, second);

    let total = subtract(tempRes, last);


    console.log(total);



    function firstPlusSecond(first, second) {
        return first + second;
    }

    function subtract(first, second) {
        return first - second;
    }

}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
