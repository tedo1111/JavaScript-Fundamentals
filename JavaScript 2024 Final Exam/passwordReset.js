function passwordReset(input) {

    let startStr = input.shift();

    let curRow = input.shift();

    let res = "";

    while (curRow !== `Done`) {

        let command = curRow.split(" ")[0];

        if (command === `TakeOdd`) {
            for (let i = 0; i < startStr.length; i++) {
                if (i % 2 !== 0) {
                    res += startStr[i];
                }
            }

            startStr = res;
            console.log(startStr);

        }
        else if (command === `Cut`) {
            let index = Number(curRow.split(" ")[1]);
            let length = Number(curRow.split(" ")[2]);

            let substringToRemove = startStr.substr(index, length);
            let indexOfSubstring = startStr.indexOf(substringToRemove);


            let newStr = startStr.slice(0, indexOfSubstring) + startStr.slice(indexOfSubstring + length);
            startStr = newStr;

            console.log(startStr);


        }
        else if (command === `Substitute`) {
            let substring = curRow.split(" ")[1];
            let substitute = curRow.split(" ")[2];

            let newPass = "";

            if (startStr.includes(substring)) {

                newPass = startStr.replace(new RegExp(substring, 'g'), substitute);
                startStr = newPass;
                console.log(startStr);
            }
            else {
                console.log(`Nothing to replace!`);
            }

        }


        curRow = input.shift();
    }

    console.log(`Your password is: ${startStr}`);
}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
);
// passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"])
// );