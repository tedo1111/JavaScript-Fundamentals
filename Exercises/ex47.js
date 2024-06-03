function ex47(char1, char2) {

    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let start = Math.min(code1, code2);
    let end = Math.max(code1, code2);

    let result = '';

    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    console.log(result.trim());


}
ex47('a',
    'd'
);
ex47('#',
    ':'
);
