function maxNumber(arr) {


    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        let num1 = arr[i];
        let isTop = true;




        for (let j = i + 1; j < arr.length; j++) {

            num2 = arr[j];

            if (num1 <= num2) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            newArr.push(num1);
        }



    }
    console.log(newArr.join(" "));



}
maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([41, 41, 34, 20]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);