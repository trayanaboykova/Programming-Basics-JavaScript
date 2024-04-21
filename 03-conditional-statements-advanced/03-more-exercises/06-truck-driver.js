function truckDriver(input) {
    let season = input[0];
    let kilometersPerMonth = parseFloat(input[1]);

    let payPerKilometer = 0;

    switch (season) {
        case "Spring":
        case "Autumn":
            if (kilometersPerMonth <= 5000) {
                payPerKilometer = 0.75;
            } else if (kilometersPerMonth <= 10000) {
                payPerKilometer = 0.95;
            } else {
                payPerKilometer = 1.45;
            }
            break;
        case "Summer":
            if (kilometersPerMonth <= 5000) {
                payPerKilometer = 0.90;
            } else if (kilometersPerMonth <= 10000) {
                payPerKilometer = 1.10;
            } else {
                payPerKilometer = 1.45;
            }
            break;
        case "Winter":
            if (kilometersPerMonth <= 5000) {
                payPerKilometer = 1.05;
            } else if (kilometersPerMonth <= 10000) {
                payPerKilometer = 1.25;
            } else {
                payPerKilometer = 1.45;
            }
            break;
    }

    let salary = (kilometersPerMonth * payPerKilometer * 4) * 0.90;

    console.log(salary.toFixed(2));
}