function shoppingList(input) {

    let list = input.shift().slice().split("!");

    let curEl = input.shift();

    while (curEl !== `Go Shopping!`) {

        let elemets = curEl.split(" ");

        let command = elemets.shift();
        let firstItem = elemets.shift()
        let secondItem = elemets.shift()

        if (command === `Urgent`) {

            if (!list.includes(firstItem)) {
                list.unshift(firstItem)
            }
        }
        else if (command === `Unnecessary`) {
            if (list.includes(firstItem)) {
                let index = list.indexOf(firstItem);
                list.splice(index, 1);
            }
        }
        else if (command === `Correct`) {
            if (list.includes(firstItem)) {
                let index = list.indexOf(firstItem);
                list.splice(index, 1, secondItem);
            }
        }
        else if (command === `Rearrange`) {
            if (list.includes(firstItem)) {
                let index = list.indexOf(firstItem);
                list.splice(index, 1);
                list.push(firstItem);
            }
        }


        curEl = input.shift();
    }

    console.log(list.join(", "));

}
shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
);
// shoppingList((["Milk!Pepper!Salt!Grapes!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!"])
// );
