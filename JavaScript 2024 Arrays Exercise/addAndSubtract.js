function addAndSubtract(arr) {


    let sumOriginal = 0;
    let sumModified = 0;

    let even = 0;
    let odd = 0;

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        num = arr[i];

        sumOriginal += num;

        if (num % 2 === 0) {
            even = num + Number(i);
            newArr.push(even);
            sumModified += even;

        }
        else {
            odd = num - Number(i);
            newArr.push(odd);
            sumModified += odd;
        }
    }

    console.log(newArr);
    console.log(sumOriginal);
    console.log(sumModified);

}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
