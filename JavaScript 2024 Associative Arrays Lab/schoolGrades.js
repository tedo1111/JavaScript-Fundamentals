function schoolGrades(arr) {

    let studentBook = {};

    for (let studentInfo of arr) {

        studentInfo = studentInfo.split(" ");
        let name = studentInfo.shift();
        let grades = studentInfo.join(" ");

        if (!studentBook.hasOwnProperty(name)) {
            studentBook[name] = grades;
        }
        else {
            studentBook[name] += ` ${grades}`;
        }
    }

    let sorted = Object.keys(studentBook).sort((a, b) => a.localeCompare(b));


    for (let name of sorted) {
        let avg = 0;
        let counter = 0;

        for (let el of studentBook[name].split(" ")) {
            avg += Number(el);
            counter++;
        }

        avg /= counter;
        console.log(`${name}: ${avg.toFixed(2)}`);

    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);