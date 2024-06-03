function ex10(num) {

    let lastD = num % 10;

    if (lastD === 0) {
        console.log(`zero`);
    } else if (lastD === 1) {
        console.log(`one`);
    } else if (lastD === 2) {
        console.log(`two`);
    } else if (lastD === 3) {
        console.log(`three`);
    } else if (lastD === 4) {
        console.log(`four`);
    } else if (lastD === 5) {
        console.log(`five`);
    } else if (lastD === 6) {
        console.log(`six`);
    } else if (lastD === 7) {
        console.log(`seven`);
    } else if (lastD === 8) {
        console.log(`eight`);
    } else if (lastD === 9) {
        console.log(`nine`);
    }

}
ex10(512);
ex10(1);
ex10(1643);