function pointsValidation(arr) {

    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);


    let firstComperison = Math.sqrt((Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2)));
    let secondComperison = Math.sqrt((Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2)));
    let lastComperison = Math.sqrt((Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2))));

    let isInteger1 = Number.isInteger(firstComperison);
    let isInteger2 = Number.isInteger(secondComperison);
    let isInteger3 = Number.isInteger(lastComperison);

    if (isInteger1) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    if (isInteger2) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }
    if (isInteger3) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);


