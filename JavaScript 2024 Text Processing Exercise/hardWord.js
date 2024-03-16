function hardWord(textAndArray) {
    let text = textAndArray[0].split(' ');
    let words = textAndArray[1];

    for (let i = 0; i < text.length; i++) {
        if (text[i].startsWith('_')) {
            const lenght = text[i].endsWith(',') || text[i].endsWith('.')
                ? text[i].length - 1
                : text[i].length;
            const word = words.find(x => x.length == lenght);
            words.splice(words.indexOf(word), 1);
            text[i] = text[i].replace('_'.repeat(word.length), word);
        }
    }

    console.log(text.join(' '));
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);
