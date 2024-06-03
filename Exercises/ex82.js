function ex82(input) {
    let searchedWords = input.shift().split(" ");

    let obj = {};

    for (let word of searchedWords) {
        obj[word] = 0;
    }

    for (let word of input) {

        if (word in obj) {
            obj[word]++;
        }
    }

    let enetries = Object.entries(obj).sort((a, b) => b[1] - a[1])

    for (let [word, occurrencesCount] of enetries) {

        console.log(`${word} - ${occurrencesCount}`);
    }

}
ex82([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);