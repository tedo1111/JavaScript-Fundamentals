function ex23(start) {

    let counter = 0;
    let total = 0;

    while (start >= 100) {
        total += (start - 26);

        start -= 10;
        counter++;
    }

    total -= 26;
    if (total < 0) {
        total = 0;
    }
    console.log(counter);
    console.log(total);

}
ex23(111);
ex23(450);
