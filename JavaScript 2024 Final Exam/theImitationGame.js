function theImitationGame(input) {

    let message = input.shift();

    let curRow = input.shift();

    let tempM = "";
    while (curRow !== `Decode`) {

        let [command, index, value] = curRow.split("|");

        if (command === `Move`) {

            // let lettersToMove = message.substring(0, index);
            // tempM = message.replace(lettersToMove, "");
            // tempM += lettersToMove;
            // message = tempM;

            let res = message.substr(Number(index)) + message.substr(0, Number(index));
            message = res;

        }
        else if (command === `Insert`) {

            // tempM = message.split("");
            // tempM.splice(index, 0, value);
            // message = tempM.join("");

            let res2 = message.slice(0, index) + value + message.slice(index);
            message = res2;

        }
        else if (command === `ChangeAll`) {

            while (message.includes(index)) {
                tempM = message.replace(index, value);
                message = tempM;
            }

        }

        curRow = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);