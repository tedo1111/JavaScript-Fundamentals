function ex9(n1, n2, n3) {


    let nums = [n1, n2, n3];


    nums.sort((a, b) => b - a);


    for (let n of nums) {
        console.log(n);
    }
    // nums.forEach(num => console.log(num));


}
ex9(2, 1, 3);
// ex9(-2, 1, 3);
// ex9(0, 0, 2);