function ex61(arr) {

    let uniqueArr = [];


    for (let num of arr) {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
        }
    }

    console.log(uniqueArr.join(" "));

}
ex61([1, 2, 3, 4]);
// ex61([7, 8, 9, 7, 2, 3, 4, 1, 2]);