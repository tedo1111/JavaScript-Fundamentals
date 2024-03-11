function searchForANumber(arr, targetArr) {

    let toTake = targetArr[0];
    let toRemove = targetArr[1];
    let searched = targetArr[2];

    let res = arr.slice(0, toTake);

    let newRes = res.slice(toRemove);

    let counter = 0;

    for (const target of newRes) {
        if (searched === target) {
            counter++;
        }

    }

    console.log(`Number ${searched} occurs ${counter} times.`);


}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);