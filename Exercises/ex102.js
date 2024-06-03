function ex102(input) {
    const string = input[0];
    const indexes = {};

    // Iterate over the characters of the string
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        // If the character is not in the indexes object, initialize it as an array
        if (!indexes.hasOwnProperty(char)) {
            indexes[char] = [];
        }

        // Push the current index into the array for the character
        indexes[char].push(i);
    }

    // Format the indexes object into the serialization format and print each serialization separately
    for (const char in indexes) {
        const serialization = `${char}:${indexes[char].join('/')}`;
        console.log(serialization);
    }
}
ex102(["abababa"]);