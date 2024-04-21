function fuelTank(input) {
    let fuelType = input[0].toLowerCase();
    let fuelAmount = parseFloat(input[1]);

    if (fuelType !== "diesel" && fuelType !== "gasoline" && fuelType !== "gas") {
        console.log("Invalid fuel!");
    } else {
        if (fuelAmount >= 25) {
            console.log("You have enough " + fuelType + ".");
        } else {
            console.log("Fill your tank with " + fuelType + "!");
        }
    }
}