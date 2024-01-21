function triplesOfLatinLetters(n) {
    for (let firstLetter = 0; firstLetter < n; firstLetter++) {
        for (let secondLetter = 0; secondLetter < n; secondLetter++) {
            for (let thirdLetter = 0; thirdLetter < n; thirdLetter++) {
                console.log(String.fromCharCode('a'.charCodeAt(0) + firstLetter) +
                    String.fromCharCode('a'.charCodeAt(0) + secondLetter) +
                    String.fromCharCode('a'.charCodeAt(0) + thirdLetter));
            }
        }
    }
}
triplesOfLatinLetters(3);
triplesOfLatinLetters(2);