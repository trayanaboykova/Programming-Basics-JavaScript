function vegetableMarket(input) {
    let priceKiloVegetables = parseFloat(input[0]);
    let priceKiloFruits = parseFloat(input[1]);
    let totalKilosVegetables = parseInt(input[2]);
    let totalKilosFruits = parseInt(input[3]);

    let totalVegetables = priceKiloVegetables * totalKilosVegetables;
    let totalFruits = priceKiloFruits * totalKilosFruits;
    let total = totalVegetables + totalFruits;
    let totalEuro = total / 1.94;

    console.log(totalEuro.toFixed(2));
}