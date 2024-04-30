function calculateDrinkCost(input) {
    let drink = input[0];
    let sugar = input[1];
    let quantity = Number(input[2]);

    let price = 0;
    switch (drink) {
        case 'Espresso':
            price = (sugar === 'Without') ? 0.90 * 0.65 : (sugar === 'Normal') ? 1.00 : 1.20;
            if (quantity >= 5) price *= 0.75;
            break;
        case 'Cappuccino':
            price = (sugar === 'Without') ? 1.00 * 0.65 : (sugar === 'Normal') ? 1.20 : 1.60;
            break;
        case 'Tea':
            price = (sugar === 'Without') ? 0.50 * 0.65 : (sugar === 'Normal') ? 0.60 : 0.70;
            break;
    }

    let totalCost = price * quantity;

    if (totalCost > 15) {
        totalCost *= 0.80;
    }

    return `You bought ${quantity} cups of ${drink} for ${totalCost.toFixed(2)} lv.`;
}