function passwordValidator(pass) {

    let isValidLenght = passLength(pass);
    let isOnlyLettersDigits = onlyLettersAndDigits(pass);
    let isOnly2Digits = atLeast2Digits(pass);


    if (isValidLenght && isOnlyLettersDigits && isOnly2Digits) {
        console.log(`Password is valid`);
    }



    function passLength(pass) {
        if (pass.length < 6 || pass.length > 10) {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
        return true;
    }
    // passLength();


    function onlyLettersAndDigits(pass) {

        let symbolsInside = /^[A-Za-z0-9]+$/;

        let isValid = symbolsInside.test(pass);

        if (isValid) {
            return true;
        }

        console.log(`Password must consist only of letters and digits`);
        return false;

    }
    // onlyLettersAndDigits();


    function atLeast2Digits(pass) {

        let symbolsInside = /[0-9]{2,}/;

        let isValid = symbolsInside.test(pass);

        if (isValid) {
            return true;
        }

        console.log(`Password must have at least 2 digits`);
        return false;

    }
    // atLeast2Digits();

}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');