function logistics(input) {
    let numberOfGoods = parseInt(input[0]);

    const pricePerTonVan = 200;
    const pricePerTonTruck = 175;
    const pricePerTonTrain = 120;

    let totalWeight = 0;
    let totalCost = 0;

    let weightByVan = 0;
    let weightByTruck = 0;
    let weightByTrain = 0;

    for (let i = 1; i <= numberOfGoods; i++) {
        let weight = parseInt(input[i]);

        if (weight <= 3) {
            totalCost += weight * pricePerTonVan;
            weightByVan += weight;
        } else if (weight <= 11) {
            totalCost += weight * pricePerTonTruck;
            weightByTruck += weight;
        } else {
            totalCost += weight * pricePerTonTrain;
            weightByTrain += weight;
        }

        totalWeight += weight;
    }

    let averageCostPerTon = totalCost / totalWeight;

    let percentVan = weightByVan / totalWeight * 100;
    let percentTruck = weightByTruck / totalWeight * 100;
    let percentTrain = weightByTrain / totalWeight * 100;

    console.log(averageCostPerTon.toFixed(2));
    console.log(`${percentVan.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}