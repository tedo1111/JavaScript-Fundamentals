function ex101(input) {

    let string = input[0];
    let caseType = input[1];
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);

        if (caseType === "UPPERCASE" && charCode >= 65 && charCode <= 90) {
            sum += charCode;
        } else if (caseType === "LOWERCASE" && charCode >= 97 && charCode <= 122) {
            sum += charCode;
        }
    }

    console.log(`The total sum is: ${sum}`);



}
ex101(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']

);