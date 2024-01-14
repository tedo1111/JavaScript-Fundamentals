function multiplicationTable(num) {

    for (let i = 1; i <= 10; i++) {
        let res = i * num;

        console.log(`${num} X ${i} = ${res}`);
    }
}
multiplicationTable(5);
multiplicationTable(2);