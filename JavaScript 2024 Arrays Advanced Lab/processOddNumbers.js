function processOddNumbers(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i] *= 2;
            newArr.push(arr[i]);
        }
    }

    let revArr = newArr.reverse();

    console.log(revArr.join(" "));

}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);