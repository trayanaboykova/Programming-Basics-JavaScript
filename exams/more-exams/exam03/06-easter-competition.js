function main(input) {
    let n = Number(input[0]);

    let winner = "";
    let maxPoints = Number.MIN_SAFE_INTEGER;

    let index = 1;

    for (let i = 0; i < n; i++) {
        let bakerName = input[index++];
        let totalPoints = 0;

        while (input[index] !== "Stop") {
            let points = Number(input[index++]);
            totalPoints += points;
        }

        console.log(`${bakerName} has ${totalPoints} points.`);

        if (totalPoints > maxPoints) {
            maxPoints = totalPoints;
            winner = bakerName;
            console.log(`${winner} is the new number 1!`);
        }

        index++;
    }

    console.log(`${winner} won competition with ${maxPoints} points!`);
}