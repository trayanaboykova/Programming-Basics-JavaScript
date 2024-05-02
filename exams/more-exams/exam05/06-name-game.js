function main(input) {
    let maxScore = Number.MIN_SAFE_INTEGER;
    let winnerName = "";
    let inputIndex = 0;

    while (input[inputIndex] !== "Stop") {
        let name = input[inputIndex];
        let score = 0;

        for (let i = 0, j = inputIndex + 1; i < name.length; i++, j++) {
            let symbol = name.charCodeAt(i);
            let number = Number(input[j]);
            if (symbol === number) {
                score += 10;
            } else {
                score += 2;
            }
            inputIndex = j;
        }

        if (score >= maxScore) {
            maxScore = score;
            winnerName = name;
        }

        inputIndex++;
    }

    console.log(`The winner is ${winnerName} with ${maxScore} points!`);
}
