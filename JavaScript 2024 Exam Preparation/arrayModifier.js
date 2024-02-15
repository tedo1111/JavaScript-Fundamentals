function arrayModifier(input) {

    let arr = input.shift().split(" ").map(Number);

    let curEl = input.shift();


    while (curEl !== `end`) {

        let [command, indexOne, indexTwo] = curEl.split(" ");

        indexOne = Number(indexOne);
        indexTwo = Number(indexTwo);
        if (command === `swap`) {
            let temp = arr[indexOne];
            arr[indexOne] = arr[indexTwo];
            arr[indexTwo] = temp;
        }

        else if (command === `multiply`) {
            let res = arr[indexOne] * arr[indexTwo];
            arr[indexOne] = res;
        }
        else if (command === `decrease`) {
            for (let i = 0; i < arr.length; i++) {
                arr[i] -= 1;
            }
        }
        curEl = input.shift();
    }

    console.log(arr.join(", "));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
);
