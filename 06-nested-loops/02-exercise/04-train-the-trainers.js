function solve(input) {
    let judgesCount = Number(input[0]);
    let currentLine = 1;
    let presentationName = input[currentLine];
    currentLine++;

    let totalPresentationGrade = 0;
    let totalPresentationsCount = 0;

    while (presentationName !== "Finish") {
        let presentationGrade = 0;

        for (let i = 0; i < judgesCount; i++) {
            let grade = Number(input[currentLine]);
            currentLine++;
            presentationGrade += grade;
        }

        let averageGrade = presentationGrade / judgesCount;
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);

        totalPresentationGrade += presentationGrade;
        totalPresentationsCount++;

        presentationName = input[currentLine];
        currentLine++;
    }

    let finalGrade = totalPresentationGrade / (totalPresentationsCount * judgesCount);
    console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`);
}


