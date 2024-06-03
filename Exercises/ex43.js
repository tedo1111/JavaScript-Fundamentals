function ex43(arr) {

    function rotate(array) {
        return array[0].map((x, i) => array.map(x => x[i]));
    }

    function checkMagic(arr) {
        arr = arr.map(x => x.reduce((a, b) => a + b));
        return Array.from(new Set(arr)).length === 1;
    }

    const isMagic = checkMagic(arr) && checkMagic(rotate(arr));
    console.log(isMagic ? "true" : "false");


}

ex43([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
