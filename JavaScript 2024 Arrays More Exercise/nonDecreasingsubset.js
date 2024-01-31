function nonDecreasingsubset(arr) {

    let max = arr[0];

    let res = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;

    });

    console.log(res.join(" "));
}
nonDecreasingsubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingsubset([1, 2, 3, 4]);
// nonDecreasingsubset([20, 3, 2, 15, 6, 1]);