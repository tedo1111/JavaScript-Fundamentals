function ex30(input) {

    let sum = 0;
    let modSum = 0;

    let newArr = [];

    for (let i = 0; i < input.length; i++) {

        let res = input[i];
        sum += res;

        if (res % 2 === 0) {
            res += i;
            newArr.push(res);
        }
        else {
            res -= i;
            newArr.push(res);
        }


    }

    for (let i = 0; i < newArr.length; i++) {
        let res = newArr[i];
        modSum += res;
    }

    console.log(newArr);
    console.log(sum);
    console.log(modSum);
}
ex30([5, 15, 23, 56, 35]);
ex30([-5, 11, 3, 0, 2]);
