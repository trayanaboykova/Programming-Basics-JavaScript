function fitnessCenter(input) {
    let totalVisitors = Number(input.shift());

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let proteinShakeCount = 0;
    let proteinBarCount = 0;

    for (let i = 0; i < totalVisitors; i++) {
        let activity = input.shift();

        switch (activity) {
            case "Back":
                backCount++;
                break;
            case "Chest":
                chestCount++;
                break;
            case "Legs":
                legsCount++;
                break;
            case "Abs":
                absCount++;
                break;
            case "Protein shake":
                proteinShakeCount++;
                break;
            case "Protein bar":
                proteinBarCount++;
                break;
        }
    }

    let workoutPercentage = (backCount + chestCount + legsCount + absCount) / totalVisitors * 100;
    let proteinPercentage = (proteinShakeCount + proteinBarCount) / totalVisitors * 100;

    let result = `${backCount} - back\n`;
    result += `${chestCount} - chest\n`;
    result += `${legsCount} - legs\n`;
    result += `${absCount} - abs\n`;
    result += `${proteinShakeCount} - protein shake\n`;
    result += `${proteinBarCount} - protein bar\n`;
    result += `${workoutPercentage.toFixed(2)}% - work out\n`;
    result += `${proteinPercentage.toFixed(2)}% - protein`;

    return result;
}