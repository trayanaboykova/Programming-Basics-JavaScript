function main(input) {
    let budget = Number(input[0]);
    let fuelLiters = Number(input[1]);
    let dayOfWeek = input[2];

    let fuelPrice = 2.10;
    let guidePrice = 100.00;

    let totalExpenses = fuelPrice * fuelLiters + guidePrice;

    if (dayOfWeek === "Saturday") {
        totalExpenses *= 0.90; // 10% discount
    } else if (dayOfWeek === "Sunday") {
        totalExpenses *= 0.80; // 20% discount
    }

    if (budget >= totalExpenses) {
        let moneyLeft = budget - totalExpenses;
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
    } else {
        let moneyNeeded = totalExpenses - budget;
        console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
    }
}