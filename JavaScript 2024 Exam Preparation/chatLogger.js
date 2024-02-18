function chatLogger(input) {

    let list = [];

    for (let i = 0; i < input.length; i++) {

        let command = input[i].split(" ");

        if (command[0] === `Chat`) {
            list.push(command[1]);
        }
        else if (command[0] === `Delete`) {
            if (list.includes(command[1])) {
                let index = list.indexOf(command[1]);
                list.splice(index, 1);
            }
        }
        else if (command[0] === `Edit`) {
            if (list.includes(command[1])) {
                let index = list.indexOf(command[1]);
                list.splice(index, 1, command[2]);
            }
        }
        else if (command[0] === `Pin`) {
            if (list.includes(command[1])) {
                let index = list.indexOf(command[1]);
                list.splice(index, 1);
                list.push(command[1]);
            }
        }
        else if (command[0] === `Spam`) {

            for (let i = 1; i < command.length; i++) {
                list.push(command[i]);
            }
        }
        else if (command[0] === `end`) {
            break;
        }
    }
    console.log(list.join('\n'));
}
chatLogger((["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"])
);
chatLogger((["Chat Hello",
    "Delete John",
    "Pin Hi",
    "end"])
);
chatLogger((["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])
);