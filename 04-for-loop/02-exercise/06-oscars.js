function calculatePoints(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numOfJudges = Number(input[2]);
    let currentPoints = academyPoints;

    for (let i = 3; i < input.length; i += 2) {
        let judgeName = input[i];
        let judgePoints = Number(input[i + 1]);

        let judgeLength = judgeName.length;
        let judgePointsForActor = (judgePoints * judgeLength) / 2;

        currentPoints += judgePointsForActor;

        if (currentPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${currentPoints.toFixed(1)}!`);
            return;
        }
    }

    let neededPoints = 1250.5 - currentPoints;
    console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
}
