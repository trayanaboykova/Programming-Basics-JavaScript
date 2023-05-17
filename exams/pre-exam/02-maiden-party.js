function maidenParty(input){
    let maidenPartyPrice = Number(input[0]);
    let loveLetters = Number(input[1]);
    let waxRoses = Number(input[2]);
    let keychains = Number(input[3]);
    let caricatures = Number(input[4]);
    let luckyPrizes = Number(input[5]);

    let loveLetterPrice = loveLetters * 0.60;
    let waxRosesPrice = waxRoses * 7.20;
    let keychainPrice = keychains * 3.60;
    let caricaturePrice = caricatures * 18.20;
    let luckyPrizePrice = luckyPrizes * 22;

    let itemsCount = loveLetters + waxRoses + keychains + caricatures + luckyPrizes;
    let totalSum = loveLetterPrice + waxRosesPrice + keychainPrice + caricaturePrice + luckyPrizePrice;
    let discount = 0;

    if (itemsCount >= 25){
        discount = totalSum * 0.35;
    }
    let totalPriceWithDiscount = totalSum - discount;
    let hostingExpenses = totalPriceWithDiscount * 0.10;
    let profit = totalPriceWithDiscount - hostingExpenses;
    if (profit >= maidenPartyPrice){
        console.log(`Yes! ${(profit - maidenPartyPrice).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(maidenPartyPrice - profit).toFixed(2)} lv needed.`)
    }
}



