function basketballTournaments(input) {
    let totalMatches = 0;
    let wins = 0;
    let losses = 0;
    let i = 0;

    while (input[i] !== "End of tournaments") {
        let tournamentName = input[i++];
        let matches = Number(input[i++]);

        for (let j = 0; j < matches; j++) {
            let desiPoints = Number(input[i++]);
            let opponentPoints = Number(input[i++]);

            let difference = Math.abs(desiPoints - opponentPoints);

            if (desiPoints > opponentPoints) {
                console.log(`Game ${j + 1} of tournament ${tournamentName}: win with ${difference} points.`);
                wins++;
            } else {
                console.log(`Game ${j + 1} of tournament ${tournamentName}: lost with ${difference} points.`);
                losses++;
            }

            totalMatches++;
        }
    }

    let winPercentage = (wins / totalMatches) * 100;
    let lossPercentage = (losses / totalMatches) * 100;

    console.log(`${winPercentage.toFixed(2)}% matches win`);
    console.log(`${lossPercentage.toFixed(2)}% matches lost`);
}