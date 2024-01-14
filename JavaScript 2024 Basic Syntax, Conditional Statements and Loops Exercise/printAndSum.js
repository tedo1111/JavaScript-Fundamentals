function printAndSum(start, end) {

    let sum = 0;
    let res = "";
    for (let i = start; i <= end; i++) {
        res += (i + " ");
        sum += i;
    }
    console.log(res);
    console.log(`Sum: ${sum}`);
}
// printAndSum(5, 10);
// printAndSum(0, 26);
printAndSum(50, 60);