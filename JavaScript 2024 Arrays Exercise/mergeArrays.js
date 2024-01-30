function mergeArrays(arr1, arr2) {

    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        num1 = arr1[i];
        num2 = arr2[i];


        if (i % 2 === 0) {
            let sum = Number(num1) + Number(num2);
            newArr.push(sum);
        }
        else {
            let sum = num1 + num2;
            newArr.push(sum)
        }
    }


    console.log(newArr.join(" - "));



}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);
