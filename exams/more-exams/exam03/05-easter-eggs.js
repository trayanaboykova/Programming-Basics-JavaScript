function main(input) {
    let eggsCount = Number(input[0]);

    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;

    for (let i = 1; i <= eggsCount; i++) {
        let color = input[i];

        switch (color) {
            case "red":
                redCount++;
                break;
            case "orange":
                orangeCount++;
                break;
            case "blue":
                blueCount++;
                break;
            case "green":
                greenCount++;
                break;
        }
    }

    console.log(`Red eggs: ${redCount}`);
    console.log(`Orange eggs: ${orangeCount}`);
    console.log(`Blue eggs: ${blueCount}`);
    console.log(`Green eggs: ${greenCount}`);

    let maxCount = Math.max(redCount, orangeCount, blueCount, greenCount);
    let maxColor = "";
    if (maxCount === redCount) {
        maxColor = "red";
    } else if (maxCount === orangeCount) {
        maxColor = "orange";
    } else if (maxCount === blueCount) {
        maxColor = "blue";
    } else {
        maxColor = "green";
    }

    console.log(`Max eggs: ${maxCount} -> ${maxColor}`);
}