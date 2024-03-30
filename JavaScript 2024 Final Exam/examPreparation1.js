function examPreparation1(input) {
    let userName = input.shift();

    for (let curEl of input) {
        let [command, word, endIndex] = curEl.split(" ");

        if (command === `Letters`) {
            userName = (word === `Lower`) ? userName.toLowerCase() : userName.toUpperCase();
            console.log(userName);
        } else if (command === `Reverse`) {
            let startIndex = Number(word);
            endIndex = Number(endIndex);

            if (startIndex >= 0 && endIndex < userName.length) {
                let substringToBeReversed = userName.substring(startIndex, endIndex + 1);
                substringToBeReversed = substringToBeReversed.split('').reverse().join('');
                console.log(substringToBeReversed);
            }
        } else if (command === `Substring`) {
            let substring = word;

            if (userName.includes(substring)) {
                userName = userName.replace(substring, "");
                console.log(userName);
            } else {
                console.log(`The username ${userName} doesn't contain ${substring}.`);
            }
        } else if (command === `Replace`) {
            let char = word;
            userName = userName.split(char).join("-");
            console.log(userName);
        } else if (command === `IsValid`) {
            let char = word;

            if (userName.includes(char)) {
                console.log(`Valid username.`);
            } else {
                console.log(`${char} must be contained in your username.`);
            }
        }
    }
}

// examPreparation1(["John",
//     "Letters Lower",
//     "Substring SA",
//     "IsValid @",
//     "Registration"
// ]);
examPreparation1(["ThisIsSoftUni",
    "Reverse 1 3",
    "Replace S",
    "Substring hi",
    "Registration"
]);