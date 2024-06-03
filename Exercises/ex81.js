function schoolRegister(input) {
    let schoolData = {};

    // Process each student's information
    input.forEach(studentInfo => {
        let [namePart, gradePart, scorePart] = studentInfo.split(", ");
        let name = namePart.split(": ")[1];
        let grade = Number(gradePart.split(": ")[1]);
        let score = Number(scorePart.split(": ")[1]);

        if (score >= 3) {
            let nextGrade = grade + 1;
            if (!schoolData[nextGrade]) {
                schoolData[nextGrade] = { students: [], scores: [] };
            }
            schoolData[nextGrade].students.push(name);
            schoolData[nextGrade].scores.push(score);
        }
    });

    // Get the grades in ascending order
    let sortedGrades = Object.keys(schoolData).sort((a, b) => a - b);

    // Print the result
    sortedGrades.forEach(grade => {
        let students = schoolData[grade].students.join(", ");
        let avgScore = schoolData[grade].scores.reduce((a, b) => a + b, 0) / schoolData[grade].scores.length;
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students}`);
        console.log(`Average annual score from last year: ${avgScore.toFixed(2)}`);
        console.log();
    });
}

// Example usage:
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);