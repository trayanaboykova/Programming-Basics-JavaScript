function transportPrice(input) {
    let n = parseInt(input[0]);
    let timeOfDay = input[1];

    let taxiDayRate = 0.79;
    let taxiNightRate = 0.90;
    let busRate = 0.09;
    let trainRate = 0.06;

    let cheapestCost = Number.MAX_VALUE;

    let taxiCost = 0.70;
    if (timeOfDay === "day") {
        taxiCost += n * taxiDayRate;
    } else {
        taxiCost += n * taxiNightRate;
    }
    cheapestCost = Math.min(cheapestCost, taxiCost);

    if (n >= 20) {
        let busCost = n * busRate;
        cheapestCost = Math.min(cheapestCost, busCost);
    }

    if (n >= 100) {
        let trainCost = n * trainRate;
        cheapestCost = Math.min(cheapestCost, trainCost);
    }

    console.log(cheapestCost.toFixed(2));
}