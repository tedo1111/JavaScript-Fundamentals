function ex31(text1, text2) {


    for (let word of text1) {
        if (text2.includes(word)) {
            console.log(word);
        }
    }

}
ex31(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
ex31(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);
