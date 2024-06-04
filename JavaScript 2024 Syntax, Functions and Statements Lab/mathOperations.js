function mathOperations(n1, n2, operator) {

    let res = 0;

    switch (operator) {
        case `+`:
            res = n1 + n2;
            break;
        case `-`:
            res = n1 - n2;
            break;
        case `*`:
            res = n1 * n2;
            break;
        case `/`:
            res = n1 / n2;
            break;
        case `%`:
            res = n1 % n2;
            break;
        case `**`:
            res = n1 ** n2;
            break;


    }

    console.log(res);

}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');