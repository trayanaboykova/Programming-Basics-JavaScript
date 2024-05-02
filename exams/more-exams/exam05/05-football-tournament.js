function main(input) {
    let club = input[0];
    let numOfMatches = Number(input[1]);
    let totalPoints = 0, winCount = 0, drawCount = 0, loseCount = 0;

    if (numOfMatches < 1) {
        console.log(`${club} hasn't played any games during this season.`);
    } else {
        for (let i = 2; i < 2 + numOfMatches; i++) {
            let outcome = input[i];

            switch (outcome) {
                case "W":
                    totalPoints += 3;
                    winCount++;
                    break;
                case "D":
                    totalPoints += 1;
                    drawCount++;
                    break;
                case "L":
                    loseCount++;
                    break;
            }
        }

        console.log(`${club} has won ${totalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${winCount}`);
        console.log(`## D: ${drawCount}`);
        console.log(`## L: ${loseCount}`);
        console.log(`Win rate: ${(winCount / numOfMatches * 100).toFixed(2)}%`);
    }
}
