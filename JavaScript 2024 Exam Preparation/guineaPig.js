function guineaPig(input) {

    let food = input.shift() * 1000;
    let hay = input.shift() * 1000;
    let cover = input.shift() * 1000;
    let guineKg = input.shift() * 1000;

    let days = 0;

    for (let i = 1; i <= 30; i++) {
        days++;
        food -= 300;

        if (i % 2 === 0) {
            let res = food * 0.05;
            hay -= res;
        }
        if (i % 3 === 0) {
            let res = guineKg / 3;
            cover -= res;
        }

        if (food < 0 || hay < 0 || cover < 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }
    food /= 1000;
    hay /= 1000;
    cover /= 1000;
    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);

}
guineaPig((["10",
    "5",
    "5.2",
    "1"])
);
// guineaPig((["1",
//     "1.5",
//     "3",
//     "1.5"])
// );
// guineaPig((["9",
//     "5",
//     "5.2",
//     "1"])
// );