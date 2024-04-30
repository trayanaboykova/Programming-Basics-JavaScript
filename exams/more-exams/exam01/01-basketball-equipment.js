function basketballEquipment(input) {
    let annualFee = Number(input[0]);

    let basketballShoes = annualFee - (annualFee * 0.4);
    let basketballKit = basketballShoes - (basketballShoes * 0.2);
    let basketballBall = basketballKit / 4;
    let basketballAccessories = basketballBall / 5;

    let totalExpenses = annualFee + basketballShoes + basketballKit + basketballBall + basketballAccessories;

    return totalExpenses.toFixed(2);
}