function ex96(word, text) {

    let textWords = text.toLowerCase().split(" ");

    if (textWords.includes(word)) {
        console.log(word);
    }
    else {
        console.log(`${word} not found!`);
    }
}
ex96('javascript',
    'JavaScript is the best programming language'
);
ex96('python',
    'JavaScript is the best programming language'
);