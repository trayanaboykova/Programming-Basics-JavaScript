function godzillaVsKong(input) {
    let budget = Number(input.shift());
    let extras = Number(input.shift());
    let costumePricePerExtra = Number(input.shift());

    let decorPrice = budget * 0.1;
    let totalCostumePrice = extras * costumePricePerExtra;

    if (extras > 150) {
        totalCostumePrice -= totalCostumePrice * 0.1;
    }

    let totalExpenses = decorPrice + totalCostumePrice;

    if (totalExpenses > budget) {
        let neededMoney = totalExpenses - budget;
        return `Not enough money!\nWingard needs ${neededMoney.toFixed(2)} leva more.`;
    } else {
        let remainingMoney = budget - totalExpenses;
        return `Action!\nWingard starts filming with ${remainingMoney.toFixed(2)} leva left.`;
    }
}