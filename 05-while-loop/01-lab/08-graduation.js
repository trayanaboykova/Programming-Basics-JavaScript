function graduation(input) {
    let name = input[0];
    let gradeCounter = 0;
    let allGrades = 0;
    let poorGrades = 0;
    let i = 1;

    while (i <= 12) {
        let grade = Number(input[i]);
        if (grade < 4) {
            poorGrades++;
            if (poorGrades === 2) {
                break;
            }
        } else {
            allGrades += grade;
            gradeCounter++;
        }
        i++;
    }

    if (poorGrades === 2) {
        console.log(`${name} has been excluded at ${gradeCounter + 1} grade`);
    } else {
        let averageGrade = allGrades / gradeCounter;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
