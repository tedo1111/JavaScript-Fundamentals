function magicMatrices(arr) {

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
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
// magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);