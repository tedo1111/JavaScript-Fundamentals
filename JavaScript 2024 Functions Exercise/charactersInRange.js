function charactersInRange(char1, char2) {

    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let res = "";

    for (let i = start + 1; i < end; i++) {
        res += (String.fromCharCode(i) + " ");
    }

    console.log(res);
}

charactersInRange('#', ':');
// charactersInRange('a', 'd');
// charactersInRange('C', '#');