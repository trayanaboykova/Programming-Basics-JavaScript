function eggPainting(input) {
    let prices = [
        [16, 12, 9],  // Large eggs
        [13, 9, 7],   // Medium eggs
        [9, 8, 5]     // Small eggs
    ];

    let size = input[0];
    let color = input[1];
    let batches = Number(input[2]);

    let sizeIndex, colorIndex;

    switch (size) {
        case "Large":
            sizeIndex = 0;
            break;
        case "Medium":
            sizeIndex = 1;
            break;
        case "Small":
            sizeIndex = 2;
            break;
        default:
            sizeIndex = -1;
    }

    switch (color) {
        case "Red":
            colorIndex = 0;
            break;
        case "Green":
            colorIndex = 1;
            break;
        case "Yellow":
            colorIndex = 2;
            break;
        default:
            colorIndex = -1;
    }

    let price = prices[sizeIndex][colorIndex];

    let income = batches * price;
    let expenses = 0.35 * income;
    let netIncome = income - expenses;

    console.log(`${netIncome.toFixed(2)} leva.`);
}