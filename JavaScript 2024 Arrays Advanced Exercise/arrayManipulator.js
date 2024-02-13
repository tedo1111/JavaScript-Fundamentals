function arrayManipulator(nums, commands) {

    for (const command of commands) {

        let element = command.split(" ");

        let curEl = element.shift();

        if (curEl === `add`) {

            let index = Number(element.shift());
            let item = Number(element.shift());

            nums.splice(index, 0, item);
        }
        else if (curEl === `addMany`) {

            let index = Number(element.shift());

            for (let item of element) {
                nums.splice(index, 0, item);
                index++;
            }
        }
        else if (curEl === `contains`) {
            let item = Number(element.shift());

            let index = nums.indexOf(item);
            console.log(index);
        }
        else if (curEl === `remove`) {
            let index = Number(element.shift());

            nums.splice(index, 1);
        }
        else if (curEl === `shift`) {
            let rotations = Number(element.shift());

            for (let curRot = 1; curRot <= rotations; curRot++) {
                let firstEl = Number(nums.shift());
                nums.push(firstEl);
            }
        }
        else if (curEl === `sumPairs`) {
            let newArr = [];

            for (let i = 0; i < nums.length; i += 2) {
                if (i + 1 < nums.length) {
                    newArr.push(nums[i] + nums[i + 1]);
                }
                else {
                    newArr.push(nums[i]);
                }
            }
            nums = newArr;
        }
        else if (curEl === `print`) {

            console.log(`[ ${nums.join(", ")} ]`);
        }

    }


}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);