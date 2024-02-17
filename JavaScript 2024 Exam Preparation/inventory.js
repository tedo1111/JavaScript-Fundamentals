function inventory(arr) {

    let list = arr.shift().split(", ");

    let curEl = arr.shift();

    while (curEl !== `Craft!`) {

        let [command, newItem] = curEl.split(" - ");

        if (command === `Collect`) {
            if (!list.includes(newItem)) {
                list.push(newItem);
            }
        }
        else if (command === `Drop`) {
            if (list.includes(newItem)) {
                let index = list.indexOf(newItem);
                list.splice(index, 1);
            }

        }
        else if (command.includes(`Combine Items`)) {
            let [index1, index2] = newItem.split(":");
            if (list.includes(index1)) {
                let item = list.indexOf(index1);
                list.splice(item + 1, 0, index2);
            }
        }
        else if (command === `Renew`) {
            if (list.includes(newItem)) {
                let indexOfItem = list.indexOf(newItem);
                list.splice(indexOfItem, 1);
                list.push(newItem)
            }
        }


        curEl = arr.shift();
    }

    console.log(list.join(", "));

}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]
);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
);
