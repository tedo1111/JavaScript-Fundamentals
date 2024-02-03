function repeatString(str, repeat) {
    let res = "";


    for (let i = 0; i < repeat; i++) {
        res += str;
    }
    console.log(res);
}
repeatString("abc", 3);
repeatString("String", 2);
