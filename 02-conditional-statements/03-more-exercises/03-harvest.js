function harvest(input) {
    let vineyardArea = parseInt(input[0]);
    let grapesPerSquareMeter = parseFloat(input[1]);
    let desiredLitersOfWine = parseInt(input[2]);
    let numberOfWorkers = parseInt(input[3]);

    let totalGrapes = vineyardArea * grapesPerSquareMeter;

    let grapesForWine = 0.4 * totalGrapes;

    let wineProduced = grapesForWine / 2.5;

    let totalWine = Math.floor(wineProduced);

    if (totalWine < desiredLitersOfWine) {
        let exactShortage = desiredLitersOfWine - wineProduced;
        let roundedShortage = Math.floor(exactShortage);
        console.log("It will be a tough winter! More " + roundedShortage + " liters wine needed.");
    } else {
        console.log("Good harvest this year! Total wine: " + totalWine + " liters.");

        let remainingWine = totalWine - desiredLitersOfWine;
        let winePerWorker = Math.ceil(remainingWine / numberOfWorkers);

        console.log(remainingWine + " liters left -> " + winePerWorker + " liters per person.");
    }
}