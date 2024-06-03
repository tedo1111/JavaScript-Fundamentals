function ex100(input) {

    const [letter, words] = input;

    // Function to find and replace blanks with matching words
    function replaceBlanks(letter, words) {
        // Split the letter into parts to identify blanks
        const parts = letter.split(/(\_\_+)/);

        // Sort words by length to facilitate matching
        words.sort((a, b) => a.length - b.length);

        // Iterate over parts and replace blanks with words of matching length
        for (let i = 0; i < parts.length; i++) {
            if (parts[i].startsWith('__')) { // This part is a blank
                const blankLength = parts[i].length;
                for (let j = 0; j < words.length; j++) {
                    if (words[j].length === blankLength) {
                        parts[i] = words[j]; // Replace blank with the matching word
                        words.splice(j, 1); // Remove the word from the array
                        break;
                    }
                }
            }
        }

        return parts.join('');
    }

    const result = replaceBlanks(letter, words);
    console.log(result);


}
ex100(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);