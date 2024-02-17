function calculateBonus(input) {
    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let bonus = Number(input.shift());

    let maxScore = 0;
    let maxLectures = 0;


    for (let i = 0; i < (students); i++) {
        let studentScore = input[i];
        let totalBonus = (studentScore / lectures) * (5 + (bonus));

        if (totalBonus >= maxScore) {
            maxScore = totalBonus;
            maxLectures = studentScore;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxScore)}.`);
    console.log(`The student has attended ${maxLectures} lectures.`);
}
calculateBonus([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
);