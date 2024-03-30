function secretChat(input) {
    let message = input.shift();

    let curEl = input.shift();
    let space = " ";

    while (curEl !== `Reveal`) {
        let command = curEl.split(`:|:`)[0];

        if (command === `InsertSpace`) {
            let index = Number(curEl.split(`:|:`)[1]);

            if (index >= 0 && index < message.length) {
                message = message.slice(0, index) + space + message.slice(index);
                console.log(message);
            }

        } else if (command === `Reverse`) {
            let subStr = curEl.split(`:|:`)[1];
            let index = message.indexOf(subStr);

            if (index !== -1) {
                let rev = subStr.split('').reverse().join("");
                message = message.slice(0, index) + rev + message.slice(index + subStr.length);
                console.log(message);
            } else {
                console.log(`error`);
            }

        } else if (command === `ChangeAll`) {
            let oldStr = curEl.split(`:|:`)[1];
            let newStr = curEl.split(`:|:`)[2];
            let regex = new RegExp(oldStr, "gi");
            message = message.replace(regex, newStr);
            console.log(message);
        }


        curEl = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}
// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]
// );
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);