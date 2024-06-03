function ex56(num) {

    let numAsString = num.toString();

    function calcAvg(number) {
        let sum = 0;
        for (let digit of number) {
            sum += Number(digit);
        }
        return sum / number.length;
    }

    while (calcAvg(numAsString) <= 5) {
        numAsString += '9';
    }

    console.log(numAsString);

}
ex56(101);
ex56(5835)