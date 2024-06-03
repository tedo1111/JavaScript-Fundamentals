function ex34(input) {

    let topArr = [];

    for (let i = 0; i < input.length; i++) {

        let isTop = true;

        for (let j = i + 1; j < input.length; j++) {
            if (input[i] <= input[j]) {
                isTop = false;
                break;
            }

        }
        if (isTop) {
            topArr.push(input[i]);
        }



    }

    console.log(topArr.join(" "));

}
ex34([1, 4, 3, 2]);
ex34([14, 24, 3, 19, 15, 17]);
ex34([41, 41, 34, 20]);
ex34([27, 19, 42, 2, 13, 45, 48]);