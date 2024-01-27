function condenseArrayToNumber(arr) {


    if (arr.length === 1) {
        console.log(Number(arr));
        return;
    }
    while (arr.length > 1) {

        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            num1 = arr[i];
            num2 = arr[i + 1];
            newArr[i] = num1 + num2;
        }

        arr = newArr;

    }

    console.log(Number(arr));

}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);