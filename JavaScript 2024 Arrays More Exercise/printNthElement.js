function printNthElement(arr) {

    let n = Number(arr.slice(-1));

    let result = "";

    arr.pop(n);

    for (let i = 0; i < arr.length; i += n) {
        result += " " + (arr[i]);
    }

    console.log(result);
}
printNthElement(['5', '20', '31', '4', '20', '2']);
// printNthElement(['dsa', 'asd', 'test', 'test', '2']);
// printNthElement(['1', '2', '3', '4', '5', '6']);