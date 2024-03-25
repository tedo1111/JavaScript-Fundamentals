function race(input) {

    let names = input.shift().split(", ");
    let curEl = input.shift();

    let letterPattern = /[a-z]/gi;

    let numsPatteren = /\d/g;

    let result = {};

    names.forEach(names => { result[names] = 0; });

    while (curEl !== 'end of race') {

        let lettrMatches = curEl.match(letterPattern);
        let name = lettrMatches.join("");

        let numsMatches = curEl.match(numsPatteren)
        let distance = numsMatches.map(Number).reduce((acc, val) => acc + val);

        if (name in result) {
            result[name] += distance;
        }

        curEl = input.shift();
    }

    let sortedRes = Object.entries(result).sort((a, b) => b[1] - a[1]);


    console.log(`1st place: ${sortedRes[0][0]}`);
    console.log(`2nd place: ${sortedRes[1][0]}`);
    console.log(`3rd place: ${sortedRes[2][0]}`);


}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);
// race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
//     'Mi*&^%$ch123o!#$%#nne787) ',
//     '%$$B(*&&)i89ll)*&) ',
//     'R**(on%^&ald992) ',
//     'T(*^^%immy77) ',
//     'Ma10**$#g0g0g0i0e',
//     'end of race']
// );