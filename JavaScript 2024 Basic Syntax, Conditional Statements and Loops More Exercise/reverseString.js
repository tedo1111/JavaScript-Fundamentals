function reverseString(reverseWord) {

    let word = "";

    for (let i = reverseWord.length - 1; i >= 0; i--) {
        word += (reverseWord[i]);

    }
    console.log(`${word}`);
}
reverseString(`Hello`);
reverseString(`SoftUni`);
reverseString(`1234`);