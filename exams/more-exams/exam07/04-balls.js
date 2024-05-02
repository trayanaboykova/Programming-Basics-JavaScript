function main(input) {
    let totalPoints = 0;
    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let otherColorsCount = 0;
    let blackDivisionsCount = 0;

    let N = Number(input[0]);

    for (let i = 1; i <= N; i++) {
        let color = input[i];

        switch (color) {
            case "red":
                totalPoints += 5;
                redCount++;
                break;
            case "orange":
                totalPoints += 10;
                orangeCount++;
                break;
            case "yellow":
                totalPoints += 15;
                yellowCount++;
                break;
            case "white":
                totalPoints += 20;
                whiteCount++;
                break;
            case "black":
                totalPoints = Math.floor(totalPoints / 2);
                blackDivisionsCount++;
                break;
            default:
                otherColorsCount++;
        }
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redCount}`);
    console.log(`Orange balls: ${orangeCount}`);
    console.log(`Yellow balls: ${yellowCount}`);
    console.log(`White balls: ${whiteCount}`);
    console.log(`Other colors picked: ${otherColorsCount}`);
    console.log(`Divides from black balls: ${blackDivisionsCount}`);
}