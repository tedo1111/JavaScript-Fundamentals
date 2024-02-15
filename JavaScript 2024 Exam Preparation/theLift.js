function theLift(input) {

    let people = Number(input.shift());

    let liftSpace = input.shift().split(" ").map(Number);


    for (let i = 0; i < liftSpace.length; i++) {
        let curEl = liftSpace[i];
        while (curEl !== 4) {
            curEl++;
            people--;
            if (people === 0) {
                break;
            }
        }
        liftSpace[i] = curEl;
        if (people === 0) {
            break;
        }
    }

    let isFull = liftSpace.filter(w => w !== 4);

    if (people === 0 && isFull.length === 0) {
        console.log(liftSpace.join(' '));
    }
    else if (isFull.length !== 0) {
        console.log(`The lift has empty spots!\n${liftSpace.join(" ")}`);
    }
    else {
        console.log(`There isn't enough space! ${people} people in a queue!\n${liftSpace.join(" ")}`);
    }
}


theLift([
    "15",
    "0 0 0 0 0"
]
);
theLift([
    "20",
    "0 2 0"
]
);
