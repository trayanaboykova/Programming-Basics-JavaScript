function footballResults(input) {
    let wins = 0;
    let losses = 0;
    let draws = 0;

    for (let i = 0; i < 3; i++) {
        let result = input[i];
        let parts = result.split(":");
        let homeGoals = Number(parts[0]);
        let awayGoals = Number(parts[1]);

        if (homeGoals > awayGoals) {
            wins++;
        } else if (homeGoals < awayGoals) {
            losses++;
        } else {
            draws++;
        }
    }

    return `Team won ${wins} games.\nTeam lost ${losses} games.\nDrawn games: ${draws}`;
}