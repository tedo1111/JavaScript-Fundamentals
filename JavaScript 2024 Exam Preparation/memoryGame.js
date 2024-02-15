function memoryGame(arr) {
    let list = arr.shift().split(' ');
    let curEl = arr.shift();
    let moves = 0;

    while (curEl !== `end`) {
        let [el1, el2] = curEl.split(" ").map(Number);

        if (el1 === el2 || el1 < 0 || el2 < 0 || el1 >= list.length || el2 >= list.length) {
            moves++;
            console.log(`Invalid input! Adding additional elements to the board`);
            let middle = Math.floor(list.length / 2);
            let cheat = `-${moves}a`;
            list.splice(middle, 0, cheat, cheat);
        } else if (list[el1] === list[el2]) {
            moves++;
            let curElement = list[el1];
            list[el1] = list[el2] = '';
            list = list.filter(el => el !== '');
            console.log(`Congrats! You have found matching elements - ${curElement}!`);
        } else {
            console.log(`Try again!`);
        }

        if (list.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }

        curEl = arr.shift();
    }

    console.log(`Sorry you lose :(\n${list.join(" ")}`);
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);

memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);
