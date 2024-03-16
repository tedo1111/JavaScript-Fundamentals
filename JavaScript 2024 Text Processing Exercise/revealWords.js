function revealWords(wordStr, targetStr) {

    let words = wordStr.split(", ");

    for (let word of words) {

        let startTarget = '*'.repeat(word.length);
        // console.log(target);
        targetStr = targetStr.replace(startTarget, word);
    }

    console.log(targetStr);
}
revealWords('great',
    'softuni is ***** place for learning new programming languages'
);
// revealWords('great, learning',
//     'softuni is ***** place for ******** new programming languages'
// );