function messageDecrypter(arr) {
    const countLines = Number(arr.shift());
    const pattern = /^([$|%])([A-Z][a-z]{2,})\1: \[\d+\]\|\[\d+\]\|\[\d+\]\|$/;
    const patternForDigits = /\d+/g;

    for (let i = 0; i < countLines; i++) {
        const curLine = arr[i];
        if (pattern.test(curLine)) {
            const tagMatch = curLine.match(/[A-Za-z]+/)[0];
            const matches = curLine.match(patternForDigits).map(Number);
            const word = matches.map(num => String.fromCharCode(num)).join('');
            console.log(`${tagMatch}: ${word}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}
messageDecrypter((["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])
);
// messageDecrypter((["3",
//     "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
//     "$tAGged$: [97][97][97]|",
//     "$Request$: [73]|[115]|[105]|true"])
// );