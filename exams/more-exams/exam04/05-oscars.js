function main(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numberOfJudges = Number(input[2]);

    let totalPoints = academyPoints;

    for (let i = 3; i < 3 + 2*numberOfJudges; i += 2) {
        let judgeName = input[i];
        let judgePoints = Number(input[i+1]);

        totalPoints += (judgeName.length * judgePoints) / 2;

        if (totalPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    }

    let neededPoints = 1250.5 - totalPoints;
    console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
}
