function main(input) {
    let targetIncome = Number(input[0]);
    let totalIncome = 0;
    let orderIndex = 1;

    while (totalIncome < targetIncome) {
        let cocktailName = input[orderIndex];
        if (cocktailName === "Party!") {
            console.log(`We need ${(targetIncome - totalIncome).toFixed(2)} leva more.`);
            console.log(`Club income - ${totalIncome.toFixed(2)} leva.`);
            return;
        }
        let cocktailCount = Number(input[orderIndex + 1]);

        let cocktailPrice = cocktailName.length * 1.0;
        let orderPrice = cocktailPrice * cocktailCount;

        if (orderPrice % 2 !== 0) {
            orderPrice *= 0.75; // 25% discount for odd order price
        }

        totalIncome += orderPrice;
        orderIndex += 2;
    }

    console.log("Target acquired.");
    console.log(`Club income - ${totalIncome.toFixed(2)} leva.`);
}
