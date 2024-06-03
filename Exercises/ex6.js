function ex6(n1, n2) {


    let res = "";
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        res += i + " ";
        sum += i;
    }

    console.log(res);
    console.log(`Sum: ${sum}`);
}
ex6(5, 10);
// ex6(0, 26);
// ex6(50, 60);