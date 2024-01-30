function MaxsequenceOfEqualElements(arr) {

    let curEl = 1;
    let long = 1;
    let indexLong = 1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            curEl++;
        }
        else {
            if (long < curEl) {
                long = curEl;
                indexLong = i - curEl + 1;
            }
            curEl = 1;
        }
    }

    let result = arr.slice(indexLong, indexLong + long);
    console.log(result.join(" "));


}
MaxsequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// MaxsequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// MaxsequenceOfEqualElements([4, 4, 4, 4]);
// MaxsequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);