function rotateArray(arr) {

    let n = arr[arr.length - 1];
    let res = [];

    arr.pop();

    for (let i = 0; i < Number(n); i++) {

        arr.unshift(arr.pop());

    }
    res += arr.join(" ");

    console.log(res);
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
