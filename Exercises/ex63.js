function ex63(arr) {

    arr.sort((a, b) => a - b);

    let result = [];

    let i = 0;
    let j = arr.length - 1;

    while (i <= j) {
        if (j >= i) {
            result.push(arr[j]);
            j--;
        }
        if (i <= j) {
            result.push(arr[i]);
            i++;
        }
    }

    console.log(result.join(' '));

}
ex63([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);