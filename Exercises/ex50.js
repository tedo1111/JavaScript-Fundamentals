function ex50(input) {


    let isValidLenght = isValidPass(input);
    let hasOnlyLettersDigits = checkIsOnlyLettersAndDigits(input);
    let hasMin2Digits = digitsCount(input);

    if (isValidLenght === true && hasMin2Digits === true && hasOnlyLettersDigits === true) {
        console.log(`Password is valid`);
    }

    function isValidPass(password) {

        if (password.length < 6 || password.length > 10) {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
        return true;
    }

    function checkIsOnlyLettersAndDigits(password) {
        let pattern = /^[A-Za-z0-9]+$/;


        let isvalid = pattern.test(password);

        if (isvalid === true) {
            return true;
        }
        console.log(`Password must consist only of letters and digits`);
        return false;
    }

    function digitsCount(password) {
        let pattern = /[0-9]{2,}/;

        let isvalid = pattern.test(password);

        if (isvalid === true) {
            return true;
        }
        console.log(`Password must have at least 2 digits`);
        return false;
    }

}
ex50('logIn');
ex50('MyPass123');
ex50('Pa$s$s');