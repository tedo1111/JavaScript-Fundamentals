function bombNumbers(numbs, bomb) {

    let bombNum = Number(bomb[0]);
    let radius = Number(bomb[1]);


    while (numbs.includes(bombNum)) {
        let index = numbs.indexOf(bombNum);
        let elementToRemove = radius * 2 + 1;
        let startIndex = index - radius;


        if (startIndex < 0) {
            elementToRemove += startIndex;
            startIndex = 0;
        }

        numbs.splice(startIndex, elementToRemove);
    }

    console.log(numbs.reduce((a, b) => a + b, 0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
);
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);