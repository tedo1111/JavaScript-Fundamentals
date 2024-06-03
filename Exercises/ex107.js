function ex107(input) {

    let arr = input.split(/\s*\s*/).join('').split(',').join(' ');
    let pattern = /(\@{6,10}|\${6,10}|\^{6,10}|\#{6,10})/g;
    let newArr = arr.split(' ');
    for (let reg of newArr) {
        if (reg.length !== 20) {

            console.log(`invalid ticket`)

        } else {

            let left = reg.toString().substring(0, reg.length / 2).match(pattern);
            let right = reg.toString().substring(reg.length / 2).match(pattern);


            if (left == null || right == null) {

                console.log(`ticket "${reg}" - no match`);

            }

            if (left !== null && right !== null) {

                left = left.toString();
                right = right.toString();

                if (left.length == 10 && right.length == 10) {
                    console.log(`ticket "${reg}" - ${left.length}${left[0]} Jackpot!`)
                }
                else if (right[0] == left[0]) {
                    if (left.length < right.length) {
                        console.log(`ticket "${reg}" - ${left.length}${left[0]}`)
                    }
                    if (right.length < left.length) {
                        console.log(`ticket "${reg}" - ${right.length}${right[0]}`)
                    }
                    if (right.length == left.length) {
                        console.log(`ticket "${reg}" - ${left.length}${left[0]}`)

                    }
                } else {
                    console.log(`invalid ticket`)
                }

            }
        }
    }

}
ex107(`Cash$$$$$$Ca$$$$$$sh`);