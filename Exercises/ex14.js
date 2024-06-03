function ex14(n) {


    let ntoStr = n.toString();

    let res = ntoStr.split("").map(Number);

    let totalRes = 0;
    for (let el of res) {
        totalRes += el;
    }
    console.log(totalRes);

}
ex14(245678);
ex14(97561);
ex14(543);