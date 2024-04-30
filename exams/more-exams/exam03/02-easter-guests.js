function easterGuests(input) {
    let guests = Number(input[0]);
    let budget = Number(input[1]);

    let breadNeeded = Math.ceil(guests / 3); // Round up to the nearest integer
    let eggsNeeded = guests * 2;

    let breadCost = breadNeeded * 4.0;
    let eggsCost = eggsNeeded * 0.45;

    let totalCost = breadCost + eggsCost;

    if (totalCost <= budget) {
        let leftMoney = budget - totalCost;
        console.log(`Lyubo bought ${breadNeeded} Easter bread and ${eggsNeeded} eggs.`);
        console.log(`He has ${leftMoney.toFixed(2)} lv. left.`);
    } else {
        let neededMoney = totalCost - budget;
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);
    }
}