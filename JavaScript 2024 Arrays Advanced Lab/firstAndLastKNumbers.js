function firstAndLastKNumbers(arr) {

    let k = arr.shift();


    let newArrStart = arr.slice(0, k);
    let newArrEnd = arr.slice(arr.length - k,)

    console.log(newArrStart.join(" "));
    console.log(newArrEnd.join(" "));


}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);