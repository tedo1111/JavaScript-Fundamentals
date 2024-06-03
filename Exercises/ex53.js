function ex53(num) {

    if (num <= 1) {
        console.log("It's not so perfect.");

        return;
    }

    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");

    }
}
ex53(6);
ex53(28);