function circleAria(input) {

    let res = 0;

    let typeOfArgument = typeof (input);
    if (typeOfArgument !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArgument}.`);
    }
    else {
        res = Math.PI * input ** 2;

        console.log(res.toFixed(2));
    }


}
circleAria(5);
circleAria('name');