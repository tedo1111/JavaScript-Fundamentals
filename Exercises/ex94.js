function ex94(input) {

    // Split the input string into words
    const words = input.split(' ');

    // Array to store valid special words
    const specialWords = [];

    // Iterate through each word
    for (const word of words) {
        // Check if the word starts with '#'
        if (word.startsWith('#')) {
            // Extract the word without the '#'
            const potentialSpecialWord = word.slice(1);
            // Check if the extracted word consists only of letters
            if (/^[a-zA-Z]+$/.test(potentialSpecialWord)) {
                // If valid, add to the list of special words
                specialWords.push(potentialSpecialWord);
            }
        }
    }

    // Print each valid special word on a new line
    for (const specialWord of specialWords) {
        console.log(specialWord);
    }

}
ex94('Nowadays everyone uses # to tag a #special word in #socialMedia');