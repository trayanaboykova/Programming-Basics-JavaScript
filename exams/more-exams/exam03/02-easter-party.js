function easterParty(input) {
    let guests = Number(input[0]);
    let pricePerPerson = Number(input[1]);
    let budget = Number(input[2]);

    let totalCost = guests * pricePerPerson;

    if (guests >= 10 && guests <= 15) {
        totalCost *= 0.85; // 15% discount
    } else if(guests > 15 && guests <= 20) {
        totalCost *= 0.80; // 20% discount
    } else if(guests > 20) {
        totalCost *= 0.75; // 25% discount
    }

    let cakePrice = budget * 0.10;
    totalCost += cakePrice;

    if(totalCost <= budget) {
        console.log(`It is party time! ${(budget - totalCost).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalCost - budget).toFixed(2)} leva needed.`);
    }
}