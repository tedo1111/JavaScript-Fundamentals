function acctivationKeys(input) {
    let activationKey = input.shift();
    let curRow = input.shift();

    while (curRow !== 'Generate') {
        let command = curRow.split('>>>')[0];

        if (command === 'Contains') {
            let subStr = curRow.split('>>>')[1];

            if (activationKey.includes(subStr)) {
                console.log(`${activationKey} contains ${subStr}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            let midCommand = curRow.split('>>>')[1];
            let startIndex = Number(curRow.split('>>>')[2]);
            let endIndex = Number(curRow.split('>>>')[3]);

            let res = activationKey.substring(startIndex, endIndex);

            if (midCommand === 'Upper') {
                res = res.toUpperCase();
            } else {
                res = res.toLowerCase();
            }

            let beforeSubstring = activationKey.substring(0, startIndex);
            let afterSubstring = activationKey.substring(endIndex);

            activationKey = beforeSubstring + res + afterSubstring;
            console.log(activationKey);
        } else if (command === 'Slice') {
            let startIndex = Number(curRow.split('>>>')[1]);
            let endIndex = Number(curRow.split('>>>')[2]);

            let beforeSubstring = activationKey.substring(0, startIndex);
            let afterSubstring = activationKey.substring(endIndex);

            activationKey = beforeSubstring + afterSubstring;
            console.log(activationKey);
        }

        curRow = input.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);
}
acctivationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
);
// acctivationKeys((["134softsf5ftuni2020rockz42",
//     "Slice>>>3>>>7",
//     "Contains>>>-rock",
//     "Contains>>>-uni-",
//     "Contains>>>-rocks",
//     "Flip>>>Upper>>>2>>>8",
//     "Flip>>>Lower>>>5>>>11",
//     "Generate"])
// );