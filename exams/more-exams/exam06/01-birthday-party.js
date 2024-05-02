function calculateBudget(rent) {
    rent = Number(rent);
    const cakePrice = rent * 0.2;
    const drinksPrice = cakePrice - (cakePrice * 0.45); // Drinks are 45% less than the cake price
    const animatorPrice = rent / 3;
    const totalBudget = rent + cakePrice + drinksPrice + animatorPrice;
    return totalBudget.toFixed(2);
}