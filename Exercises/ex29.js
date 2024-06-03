function ex29(a, b, c) {

    let s = (a + b + c) / 2;

    let res = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    console.log(res);


}
ex29(2,
    3.5,
    4
);
ex29(3,
    5.5,
    4
);
