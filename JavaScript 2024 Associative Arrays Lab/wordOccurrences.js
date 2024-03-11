function wordOccurrences(input) {

    let wordOcc = {};

    for (let el of input) {

        if (!wordOcc.hasOwnProperty(el)) {
            wordOcc[el] = 1;
        }
        else {
            wordOcc[el] += 1;
        }
    }

    let sorted = Object.entries(wordOcc).sort((a, b) => b[1] - a[1]);

    sorted.forEach(element => {
        console.log(`${element[0]} -> ${element[1]} times`);
    });
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here",
    "is", "another", "sentence", "And", "finally", "the", "third"
    , "sentence"]);