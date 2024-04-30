function oscarsCeremony(input) {
    let hallRent = Number(input.shift());

    let statuettesPrice = hallRent * 0.7;
    let cateringPrice = statuettesPrice * 0.85;
    let soundSystemPrice = cateringPrice / 2;

    let totalExpenses = hallRent + statuettesPrice + cateringPrice + soundSystemPrice;

    return totalExpenses.toFixed(2);
}