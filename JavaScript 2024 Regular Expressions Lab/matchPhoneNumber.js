function matchPhoneNumber(numbers) {
    let pattern = /(\+359([ -])2(\2)(\d{3})(\2)(\d{4}))\b/g;

    let validPhones = [];
    for (let number of numbers) {
        let validPhone;
        while ((validPhone = pattern.exec(number)) !== null) {
            validPhones.push(validPhone[0]);
        }
    }

    console.log(validPhones.join(", "));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);