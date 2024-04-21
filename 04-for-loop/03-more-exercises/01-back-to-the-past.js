function backToThePast(input) {
    let inheritedMoney = parseFloat(input[0]);
    let lastYear = parseInt(input[1]);

    let currentYear = 1800;
    let age = 18;

    let totalCosts = 0;
    for (let year = currentYear; year <= lastYear; year++, age++) {
        if (year % 2 === 0) {
            totalCosts += 12000;
        } else {
            totalCosts += 12000 + 50 * age;
        }
    }

    let remainingMoney = inheritedMoney - totalCosts;

    if (remainingMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${remainingMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(-remainingMoney).toFixed(2)} dollars to survive.`);
    }
}