function main(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    let dailyCost = 0;

    switch (destination) {
        case "Dubai":
            switch (season) {
                case "Winter":
                    dailyCost = 45000;
                    break;
                case "Summer":
                    dailyCost = 40000;
                    break;
            }
            break;
        case "Sofia":
            switch (season) {
                case "Winter":
                    dailyCost = 17000;
                    break;
                case "Summer":
                    dailyCost = 12500;
                    break;
            }
            dailyCost *= 1.25; // 25% increase for Sofia
            break;
        case "London":
            switch (season) {
                case "Winter":
                    dailyCost = 24000;
                    break;
                case "Summer":
                    dailyCost = 20250;
                    break;
            }
            break;
    }

    let totalCost = dailyCost * days;

    if (destination === "Dubai") {
        totalCost *= 0.7; // 30% discount for Dubai
    }

    let diff = Math.abs(budget - totalCost);
    if (budget >= totalCost) {
        console.log(`The budget for the movie is enough! We have ${(budget - totalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}