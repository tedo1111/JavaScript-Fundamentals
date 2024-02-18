function theBiscuitFactory(input) {

    let biscuits = Number(input.shift());
    let workers = Number(input.shift());
    let numOfBiscuts = Number(input.shift());

    let total = 0;

    for (let i = 1; i <= 30; i++) {

        if (i % 3 === 0) {

            total += biscuits * workers * 0.75;
            total = Math.floor(total);
        }
        else {
            total += biscuits * workers;
            total = Math.floor(total);

        }
    }
    let diff = Math.abs(numOfBiscuts - total);

    console.log(`You have produced ${total} biscuits for the past month.`);

    if (total > numOfBiscuts) {
        let perc = diff / numOfBiscuts * 100;
        console.log(`You produce ${perc.toFixed(2)} percent more biscuits.`);
    }
    else {
        let perc = diff / numOfBiscuts * 100;
        console.log(`You produce ${perc.toFixed(2)} percent less biscuits.`);
    }
}
theBiscuitFactory((["78",
    "8",
    "16000"])
);
theBiscuitFactory((["65",
    "12",
    "26000"])
);
theBiscuitFactory(["163",
    "16",
    "67020"]
);