function destinationMapper(input) {

    let pattern = /([=/])([A-Z][a-zA-Z]{2,})\1/g;

    let arr = [];

    let match;

    let points = 0;

    while ((match = pattern.exec(input)) !== null) {
        arr.push(match[2]);

    }

    for (let el of arr) {
        points += el.length;
    }

    console.log(`Destinations: ${arr.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
// destinationMapper("ThisIs some InvalidInput");