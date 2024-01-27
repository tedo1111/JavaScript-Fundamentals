function equalArrays(arr1, arr2) {

    let indexCounter = 0;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {


        num1 = arr1[i];
        num2 = arr2[i];

        if (num1 === num2) {
            sum += Number(num1);

        }
        else {
            console.log(`Arrays are not identical. Found difference at ${indexCounter} index`);
            return;
        }
        indexCounter++;
    }

    if (num1 === num2) {

        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);