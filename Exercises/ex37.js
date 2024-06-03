function ex37(arr, n) {

    let res = 0;

    let newArr = [];

    let curEl = arr.shift();

    while (arr.length > 0) {


        for (let i = 0; i < arr.length; i++) {
            let el = arr[i];
            if (el + curEl === n) {
                console.log(`${curEl} ${el}`);
            }

        }
        curEl = arr.shift();
    }
}
// ex37([1, 7, 6, 2, 19, 23],
//     8
// );
// ex37([14, 20, 60, 13, 7, 19, 8],
//     27
// );
ex37([1, 2, 3, 4, 5, 6],
    6
);