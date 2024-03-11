function meetings(input) {

    let meetings = {};

    for (let el of input) {

        let [day, name] = el.split(" ");

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
        else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const day in meetings) {

        console.log(`${day} -> ${meetings[day]}`);
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);
// meetings(['Friday Bob',
//     'Saturday Ted',
//     'Monday Bill',
//     'Monday John',
//     'Wednesday George']
// );