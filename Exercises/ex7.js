function ex7(n) {

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += i + ' ';
        }
        console.log(row);
    }
}
ex7(3);
// ex7(5);
// ex7(6);