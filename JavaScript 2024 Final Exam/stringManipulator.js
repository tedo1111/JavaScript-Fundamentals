function stringManipulator(input) {

    let str = input.shift();

    let curel = input.shift();
    let tempM = "";

    while (curel !== `End`) {

        let command = curel.split(" ");
        let action = command[0];

        if (action === `Translate`) {
            let char = command[1];
            let replacement = command[2];

            str = str.replace(new RegExp(char, 'g'), replacement);
            console.log(str);
        }
        else if (action === `Includes`) {
            let substiring = command[1];

            if (str.includes(substiring)) {
                console.log(`True`);
            }
            else {
                console.log(`False`);
            }


        }
        else if (action === `Start`) {
            let substiring = command[1];
            if (str.startsWith(substiring)) {
                console.log(`True`);
            }
            else {
                console.log(`False`);
            }
        }
        else if (action === `Lowercase`) {
            str = str.toLowerCase();
            console.log(str);
        }
        else if (action === `FindIndex`) {
            let char = command[1];

            let lastI = str.lastIndexOf(char);
            console.log(lastI);

        }
        else if (action === `Remove`) {
            let startIndex = +command[1];
            let count = +command[2];

            str = str.slice(0, startIndex) + str.slice(startIndex + count);

            console.log(str);

        }

        curel = input.shift();
    }

}
// stringManipulator((["//Thi5 I5 MY 5trING!//",
//     "Translate 5 s",
//     "Includes string",
//     "Start //This",
//     "Lowercase",
//     "FindIndex i",
//     "Remove 0 10",
//     "End"])
// );
stringManipulator((["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"])
);