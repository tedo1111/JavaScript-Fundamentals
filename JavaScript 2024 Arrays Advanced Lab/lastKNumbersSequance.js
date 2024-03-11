function lastKNumbersSequance(n, k) {

    let arr = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i;
        let previousK = arr.slice(start, end);
        let sum = 0;
        for (let i = 0; i < previousK.length; i++) {
            sum += previousK[i];
        }
        arr[i] = sum;
    }

    console.log(arr.join(" "));

}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);