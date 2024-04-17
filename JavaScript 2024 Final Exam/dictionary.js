function dictionary(input) {
    let inn = input.shift();
    let dictionaryObj = {};
    let arr = [];

    while (inn !== 'Hand Over' && inn !== 'Test') {
        let wordsArr = inn.split(' | ');
        if (wordsArr[0].includes(':')) {
            for (let curWord of wordsArr) {
                let [word, definition] = curWord.split(': ');
                if (word in dictionaryObj) {
                    dictionaryObj[word].push(definition);
                } else {
                    dictionaryObj[word] = [definition];
                }
            }
        } else {
            for (let curWord of wordsArr) {
                arr.push(curWord);
            }
        }

        inn = input.shift();
    }

    if (inn === 'Hand Over') {
        let entries = Object.keys(dictionaryObj);
        let result = entries.join(' ');
        console.log(result);
    }

    if (inn === 'Test') {
        for (let curTarget of arr) {
            if (curTarget in dictionaryObj) {
                console.log(`${curTarget}:`);
                for (let definition of dictionaryObj[curTarget]) {
                    console.log(` -${definition}`);
                }
            }
        }
    }
}

dictionary((["programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over"])
);
// dictionary((["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
//     "care | kitchen | flower",
//     "Test"])
// );
// dictionary((["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
//     "bit | code | tackle",
//     "Test"])
// );