function countStringOccurrences(text, word) {

    text = text.split(" ");

    let counter = 0;

    for (let el of text) {

        if (el === word) {
            counter++;
        }

    }
    console.log(counter);

}
countStringOccurrences('This is a word and it also is a sentence', 'is');