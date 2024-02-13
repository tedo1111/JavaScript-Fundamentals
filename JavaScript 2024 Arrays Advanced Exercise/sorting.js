function sorting(arr) {

    let newArr = [];

    let finalArr = [];
    let sorted = arr.sort((a, b) => a - b);

    for (const el of sorted) {
        newArr.push(el);
    }

    for (const el of sorted) {
        let end = newArr.pop();

        if (end !== undefined) {
            finalArr.push(end);
        }
        let start = newArr.shift();
        if (start !== undefined) {
            finalArr.push(start);
        }
    }


    console.log(finalArr.join(` `));

}
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
