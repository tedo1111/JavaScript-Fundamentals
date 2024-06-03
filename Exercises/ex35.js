function ex35(arr) {

    let res = 'no';

    for (let i = 0; i < arr.length; i++) {
        let left = 0;

        for (let j = 0; j < i; j++) {
            left += arr[j];
        }

        let right = 0;

        for (let k = arr.length - 1; k > i; k--) {
            right += arr[k];
        }

        if (left === right) {
            res = i;
            break;
        }
    }

    console.log(res);

}
ex35([1, 2, 3, 3]);
// ex35([1, 2]);
// ex35([1]);
// ex35([1, 2, 3]);
// ex35([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);