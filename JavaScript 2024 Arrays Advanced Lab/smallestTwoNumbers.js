function smallestTwoNumbers(arr) {

    let sorted = arr.sort((a, b) => a - b);

    console.log(Number(sorted[0]), Number(sorted[1]));


}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);