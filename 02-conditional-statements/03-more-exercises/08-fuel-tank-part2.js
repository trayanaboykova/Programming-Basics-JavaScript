function fuelTankPart2(input) {
    let fuelType = input[0];
    let fuelAmount = parseFloat(input[1]);
    let hasCard = input[2];

    let pricePerLiter = 0.0;
    let discount = 0.0;

    switch (fuelType) {
        case "Gasoline":
            pricePerLiter = 2.22;
            discount = hasCard === "Yes" ? 0.18 : 0.0;
            break;
        case "Diesel":
            pricePerLiter = 2.33;
            discount = hasCard === "Yes" ? 0.12 : 0.0;
            break;
        case "Gas":
            pricePerLiter = 0.93;
            discount = hasCard === "Yes" ? 0.08 : 0.0;
            break;
        default:
            console.log("Invalid fuel type.");
            return;
    }

    let cost = fuelAmount * (pricePerLiter - discount);

    if (fuelAmount > 25) {
        cost *= 0.90; // 10% discount
    } else if (fuelAmount >= 20) {
        cost *= 0.92; // 8% discount
    }

    console.log(cost.toFixed(2) + " lv.");
}