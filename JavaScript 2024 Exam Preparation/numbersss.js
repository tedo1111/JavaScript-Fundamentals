function numbersss(input) {

    let list = input.shift().split(" ").map(Number);

    let curEl = input.shift();
    let newArr = [];

    while (curEl !== `Finish`) {

        let [command, value, replace] = curEl.split(" ");
        value = Number(value);

        if (command === `Add`) {
            list.push(value);
        }
        else if (command === `Remove`) {
            if (list.includes(value)) {
                let index = list.indexOf(value);
                list.splice(index, 1);
                // console.log(list);
            }
        }
        else if (command === `Replace`) {
            if (list.includes(value)) {
                let index = list.indexOf(value);
                list.splice(index, 1, replace);
                // console.log(list);
            }
        }
        else if (command === `Collapse`) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] >= value) {
                    newArr.push(list[i]);
                }
            }
            list = newArr;
        }


        curEl = input.shift();
    }
    console.log(list.join(" "));

}
numbersss((["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"])
);
numbersss((["1 20 -1 10",
    "Collapse 8",
    "Finish"])
);
numbersss((["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Finish"])
);