function main(input) {
    let budget = Number(input[0]);
    let productsCount = 0;
    let totalCost = 0;

    let i = 1;
    while (input[i] != "Stop") {
        let productName = input[i];
        let productPrice = Number(input[i+1]);

        productsCount++;
        if (productsCount % 3 == 0) {
            productPrice /= 2; // applying the discount for every third product
        }

        if (budget >= productPrice) {
            budget -= productPrice;
            totalCost += productPrice;
        } else {
            console.log("You don't have enough money!");
            console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
            return;
        }

        i += 2;
    }

    console.log(`You bought ${productsCount} products for ${totalCost.toFixed(2)} leva.`);
}