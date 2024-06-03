function ex25(num) {

    let isPrime = true;

    if (num === 1) {
        console.log('true');
    }

    else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log('true');
        }
        else {
            console.log('false');
        }
    }

}
ex25(7);
ex25(8);
ex25(81);
