function movingTarget(input) {
    let list = input.shift().slice().split(" ");
    let curEl = input.shift();

    while (curEl !== `End`) {
        let elements = curEl.split(" ");
        let command = elements.shift();
        let firstIndex = Number(elements.shift());
        let secondIndex = Number(elements.shift());

        if (command === `Shoot`) {
            if (firstIndex < list.length && firstIndex >= 0) {
                let res = Number(list[firstIndex]) - Number(secondIndex);
                if (res <= 0) {
                    list.splice(firstIndex, 1);
                } else {
                    list[firstIndex] = res;
                }
            }
        } else if (command === `Add`) {
            if (firstIndex < list.length && firstIndex >= 0) {
                list.splice(firstIndex, 0, secondIndex);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === `Strike`) {
            let start = firstIndex - secondIndex;
            let end = firstIndex + secondIndex;
            if (start >= 0 && end < list.length) {
                list.splice(start, end - start + 1);
            } else {
                console.log(`Strike missed!`);
            }
        }

        curEl = input.shift();
    }

    console.log(list.join(`|`));
}

movingTarget((["1 2 3 4 5", "Strike 0 1", "End"]));
movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
);
