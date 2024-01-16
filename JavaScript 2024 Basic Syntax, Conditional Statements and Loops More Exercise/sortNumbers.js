function sortNumbers(num1, num2, num3) {

    let max = Math.max(num1, num2, num3);

    let min = Math.min(num1, num2, num3);

    let mid = num1 + num2 + num3 - max - min;

    console.log(max);
    console.log(mid);
    console.log(min);

}
sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);