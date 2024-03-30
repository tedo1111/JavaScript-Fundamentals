function examPreparation2(input) {

    let text = input.shift();

    let pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;

    let result;
    let destinations = [];
    let travelPoints = 0;

    while ((result = pattern.exec(text)) !== null) {
        let destination = result[2];
        destinations.push(destination);
        travelPoints += destination.length;
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);



}
examPreparation2(["=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="]);
examPreparation2(["ThisIs some InvalidInput"]);