function ex93(words, sentence) {

    const wordsArray = words.split(', ');
    let sentenceArray = sentence.split(' ');

    sentenceArray = sentenceArray.map(word => {
        if (word.includes('*')) {
            const match = wordsArray.find(w => w.length === word.length);
            if (match) {
                return match;
            }
        }
        return word;
    });

    console.log(sentenceArray.join(' '));



}
ex93('great',
    'softuni is ***** place for learning new programming languages'
);