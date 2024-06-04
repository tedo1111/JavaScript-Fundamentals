function sumOfNtoM(n, m) {

    let sum = 0;

    let n1 = Number(n);
    let m1 = Number(m);

    for (let i = n1; i <= m1; i++) {
        sum += i;
    }

    console.log(sum);

}
sumOfNtoM('1', '5');
sumOfNtoM('-8', '20');
