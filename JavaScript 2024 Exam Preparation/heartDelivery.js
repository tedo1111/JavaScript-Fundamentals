function heartDelivery(arrOfElements) {
    let neighborhood = arrOfElements.shift().split("@").map(Number);
    let actions = arrOfElements.shift().split(" ");
    let currentCommand = actions.shift();
    let previousIndex = 0;

    while (currentCommand !== "Love!") {
        let jumpIndex = Number(actions.shift());
        jumpIndex += previousIndex;

        if (jumpIndex >= neighborhood.length || jumpIndex < 0) {
            jumpIndex = 0;
        }

        if (neighborhood[jumpIndex] !== 0) {
            neighborhood[jumpIndex] -= 2;
            if (neighborhood[jumpIndex] <= 0) {
                console.log(`Place ${jumpIndex} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${jumpIndex} already had Valentine's day.`);
        }
        previousIndex = jumpIndex;
        actions = arrOfElements.shift().split(" ");
        currentCommand = actions.shift();
    }

    let failedPlaces = neighborhood.filter((x) => x !== 0);
    let successPlaces = neighborhood.filter((y) => y === 0);

    console.log(`Cupid's last position was ${previousIndex}.`);
    if (successPlaces.length === neighborhood.length) {
        return console.log(`Mission was successful.`);
    } else {
        //console.log(`Cupid's last position was ${previousIndex}.`);
        console.log(`Cupid has failed ${failedPlaces.length} places.`);
    }
}



// heartDelivery(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]
// );
heartDelivery((["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
);

