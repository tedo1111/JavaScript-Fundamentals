function aggregateElem(input) {

    let sum = 0;
    let invertedSum = 0;
    let concSum = "";

    for (let i = 0; i < input.length; i++) {
        let curEl = input[i];
        sum += curEl;
        invertedSum += 1 / curEl;
        concSum += curEl;

    }

    console.log(sum);
    console.log(invertedSum);
    console.log(concSum);

}
aggregateElem([1, 2, 3]);
// aggregateElem([2, 4, 8, 16]);