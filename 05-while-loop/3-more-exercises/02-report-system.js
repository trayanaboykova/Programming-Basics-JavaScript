function reportSystem(input) {
    let targetAmount = parseInt(input[0]);
    let collectedCashAmount = 0;
    let collectedCardAmount = 0;
    let cashTransactionsCount = 0;
    let cardTransactionsCount = 0;
    let totalCount = 0;
    let i = 1;

    while (true) {
        if (input[i] === "End") {
            console.log("Failed to collect required money for charity.");
            return;
        }

        let price = parseInt(input[i]);

        totalCount++;

        if (totalCount % 2 !== 0) { // Cash payment
            if(price > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                collectedCashAmount += price;
                cashTransactionsCount++;
            }
        } else { // Card payment
            if(price < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                collectedCardAmount += price;
                cardTransactionsCount++;
            }
        }

        if(collectedCashAmount + collectedCardAmount >= targetAmount){
            break;
        }

        i++;
    }

    let averageCash = collectedCashAmount / cashTransactionsCount;
    let averageCard = collectedCardAmount / cardTransactionsCount;

    console.log(`Average CS: ${averageCash.toFixed(2)}`);
    console.log(`Average CC: ${averageCard.toFixed(2)}`);
}