function arrayManipulations(arr) {

    let curEl = arr.shift().split(" ").map(Number);

    for (let res of arr) {

        let [command, elOne, elTwo] = res.split(" ");

        switch (command) {
            case "Add":
                curEl.push(Number(elOne));
                break;

            case "Remove":
                curEl = curEl.filter(num => num !== Number(elOne));
                break;
            case "RemoveAt":
                curEl.splice(elOne, 1);
                break;
            case "Insert":
                curEl.splice(elTwo, 0, elOne)

                break;

        }


    }
    console.log(curEl.join(" "));

}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);