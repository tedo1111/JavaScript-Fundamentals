function ex39(arr) {

    let num = 0;

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        num++;
        let curEl = arr[i];

        if (curEl === `add`) {
            newArr.push(num);
        }
        else if (curEl === `remove`) {
            newArr.pop(num);
        }
    }

    if (newArr.length < 1) {
        console.log(`Empty`);
    } else {
        console.log(newArr.join(" "));
    }

}
ex39(['add', 'add', 'add', 'add']);
ex39(['add', 'add', 'remove', 'add', 'add']);
ex39(['remove', 'remove', 'remove']);