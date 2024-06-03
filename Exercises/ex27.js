function ex27(a, b, c) {

    let num = [a, b, c];


    num.sort((a, b) => a - b);

    let lastEl = num[num.length - 1];

    console.log(lastEl);

}
ex27(-2,
    7,
    3
);
ex27(130,
    5,
    99
);
ex27(43,
    43.2,
    43.1
);
ex27(2,
    2,
    2
);