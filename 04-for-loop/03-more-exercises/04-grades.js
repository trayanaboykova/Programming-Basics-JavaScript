function gradesAnalysis(input) {
    let numberOfStudents = parseInt(input[0]);
    let grades = input.slice(1).map(Number);

    let countTopStudents = 0;
    let countGoodStudents = 0;
    let countAverageStudents = 0;
    let countFailStudents = 0;

    let totalSum = 0;

    for (let grade of grades) {
        if (grade >= 5.00) {
            countTopStudents++;
        } else if (grade < 5.00 && grade >= 4.00) {
            countGoodStudents++;
        } else if (grade < 4.00 && grade >= 3.00) {
            countAverageStudents++;
        } else {
            countFailStudents++;
        }
        totalSum += grade;
    }

    let percentTopStudents = (countTopStudents / numberOfStudents) * 100;
    let percentGoodStudents = (countGoodStudents / numberOfStudents) * 100;
    let percentAverageStudents = (countAverageStudents / numberOfStudents) * 100;
    let percentFailStudents = (countFailStudents / numberOfStudents) * 100;

    let averageGrade = totalSum / numberOfStudents;

    console.log(`Top students: ${percentTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentGoodStudents.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentAverageStudents.toFixed(2)}%`);
    console.log(`Fail: ${percentFailStudents.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}
