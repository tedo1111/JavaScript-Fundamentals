function replaceRepeatingChars(input) {

    let res = "";

    for (let i = 0; i < input.length; i++) {
        // console.log(input[i]);

        if (input[i + 1] !== input[i]) {
            res += input[i];
        }
    }

    console.log(res);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
// replaceRepeatingChars('qqqwerqwecccwd');