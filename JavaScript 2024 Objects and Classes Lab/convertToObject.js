function convertToObject(obj) {

    let person = JSON.parse(obj);

    for (let [key, values] of Object.entries(person)) {
        console.log(`${key}: ${values}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
// convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');