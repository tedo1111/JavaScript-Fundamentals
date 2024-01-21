function rightPlace(str1, missing, str2) {

    let missingLetter = str1.replace('_', missing);

    if (missingLetter === str2) {
        console.log(`Matched`);
    }
    else {
        console.log(`Not Matched`);
    }

}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');