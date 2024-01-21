function echoType(parameter) {

    let typeOfParametar = typeof (parameter);

    if (typeOfParametar === `number` || typeOfParametar === `string`) {
        console.log(`${typeOfParametar}\n${parameter}`);
    }
    else if (typeOfParametar === `object`) {
        console.log(`${typeOfParametar}`);
        console.log('Parameter is not suitable for printing');
    }

}
echoType('Hello, JavaScript!');
echoType(18);
echoType(null);