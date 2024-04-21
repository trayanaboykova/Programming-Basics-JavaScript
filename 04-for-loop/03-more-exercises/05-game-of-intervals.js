function gameOfIntervals(input) {
    let numberOfMoves = parseInt(input[0]);
    input = input.slice(1).map(Number);

    let score = 0;
    let counts = new Array(6).fill(0);

    for (let i = 0; i < numberOfMoves; i++) {
        let number = input[i];

        if (number < 0 || number > 50) {
            score /= 2;
            counts[5]++;
        } else if (number >= 0 && number <= 9) {
            score += number * 0.20;
            counts[0]++;
        } else if (number >= 10 && number <= 19) {
            score += number * 0.30;
            counts[1]++;
        } else if (number >= 20 && number <= 29) {
            score += number * 0.40;
            counts[2]++;
        } else if (number >= 30 && number <= 39) {
            score += 50;
            counts[3]++;
        } else if (number >= 40 && number <= 50) {
            score += 100;
            counts[4]++;
        }
    }

    console.log(score.toFixed(2));
    console.log(`From 0 to 9: ${(100.0 * counts[0] / numberOfMoves).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(100.0 * counts[1] / numberOfMoves).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(100.0 * counts[2] / numberOfMoves).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(100.0 * counts[3] / numberOfMoves).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(100.0 * counts[4] / numberOfMoves).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(100.0 * counts[5] / numberOfMoves).toFixed(2)}%`);
}