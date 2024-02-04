function nxNMatrix(num) {

    for (let i = 0; i < num; i++) {
        let row = "";
        for (let j = 0; j < num; j++) {
            row += num + " ";
        }
        console.log(row);
    }
}
nxNMatrix(3);
nxNMatrix(7);
nxNMatrix(2);