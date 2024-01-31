function addAndRemove(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === `remove`) {
            res.pop();
        }
        else if (arr[i] === `add`) {
            res.push(i + 1);
        }
    }

    if (res.length === 0) {
        console.log(`Empty`);
    }
    else {
        console.log(res.join(" "));
    }


}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);