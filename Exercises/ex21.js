function ex21(n1, operator, n2) {

    let res = 0;
    switch (operator) {
        case '+':
            res = n1 + n2;
            break;
        case '-':
            res = n1 - n2;
            break;
        case '/':
            res = n1 / n2;
            break;
        case '*':
            res = n1 * n2;
            break;



    }
    console.log(res.toFixed(2));
}
ex21(5,
    '+',
    10
);
ex21(25.5,
    '-',
    3
);