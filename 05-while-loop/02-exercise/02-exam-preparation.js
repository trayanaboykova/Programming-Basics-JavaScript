function examPreparation(input) {
    let countPoorGrades = Number(input[0]);
    let totalSumGrades = 0;
    let contProblems = 0;
    let lastProblem = "";
    let count = 0;
    let win = false;
    let i = 1;

    while (count < countPoorGrades && input[i] !== "Enough") {
        let problemName = input[i];
        i++;
        let currentGrade = Number(input[i]);
        i++;
        if (currentGrade <= 4) {
            count++;
        }
        totalSumGrades += currentGrade;
        contProblems++;
        lastProblem = problemName;
    }
    if (count >= countPoorGrades) {
        console.log(`You need a break, ${count} poor grades.`);
    } else {
        let averageGrade = (totalSumGrades / contProblems).toFixed(2);
        console.log(`Average score: ${averageGrade}`);
        console.log(`Number of problems: ${contProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
