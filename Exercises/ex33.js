function ex33(arr, rotation) {

    for (let i = 0; i < rotation; i++) {

        let el1 = arr.shift();
        arr.push(el1);

    }
    console.log(arr.join(" "));

}
ex33([51, 47, 32, 61, 21], 2);
// ex33([32, 21, 61, 1], 4);
// ex33([2, 4, 15, 31], 5);