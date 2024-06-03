function ex36(arr) {


    let curEl = 1;
    let longest = 0;
    let indexLong = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            curEl++;
        }
        else {
            if (longest < curEl) {
                longest = curEl;
                indexLong = i - curEl + 1;
            }
            curEl = 1;
        }

    }

    let res = arr.slice(indexLong, indexLong + longest);
    console.log(res.join(" "));


}
ex36([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
ex36([1, 1, 1, 2, 3, 1, 3, 3]);
ex36([4, 4, 4, 4]);
ex36([0, 1, 1, 5, 2, 2, 6, 3, 3]);