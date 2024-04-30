function tennisRanklist(input) {
    let tournaments = Number(input.shift());
    let initialPoints = Number(input.shift());

    let totalPoints = 0;
    let totalWins = 0;

    for (let i = 0; i < tournaments; i++) {
        let result = input.shift();

        switch (result) {
            case "W":
                totalPoints += 2000;
                totalWins++;
                break;
            case "F":
                totalPoints += 1200;
                break;
            case "SF":
                totalPoints += 720;
                break;
        }
    }

    let averagePoints = Math.floor(totalPoints / tournaments);
    let winPercentage = (totalWins / tournaments) * 100;

    let result = `Final points: ${totalPoints + initialPoints}\n`;
    result += `Average points: ${averagePoints}\n`;
    result += `${winPercentage.toFixed(2)}%`;

    return result;
}