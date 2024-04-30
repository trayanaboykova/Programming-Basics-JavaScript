function easterTrip(input) {
    let prices = [
        [30, 35, 40],
        [28, 32, 39],
        [32, 37, 43]
    ];

    let destination = input[0];
    let dates = input[1];
    let nights = Number(input[2]);

    let destinationIndex = -1;
    let datesIndex = -1;

    switch (destination) {
        case "France":
            destinationIndex = 0;
            break;
        case "Italy":
            destinationIndex = 1;
            break;
        case "Germany":
            destinationIndex = 2;
            break;
    }

    switch (dates) {
        case "21-23":
            datesIndex = 0;
            break;
        case "24-27":
            datesIndex = 1;
            break;
        case "28-31":
            datesIndex = 2;
            break;
    }

    let totalCost = nights * prices[destinationIndex][datesIndex];

    console.log(`Easter trip to ${destination} : ${totalCost.toFixed(2)} leva.`);
}