function godzillaVsKong(input){
    let movieBudget = Number(input[0]);
    let statists = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decorPrice = movieBudget * 0.10;
    let statistsClothes = statists * clothesPrice;

    if (statists > 150){
        statistsClothes = statistsClothes - (statistsClothes * 0.10);
    }
    let totalPrice = decorPrice + statistsClothes;
    if (totalPrice > movieBudget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalPrice - movieBudget).toFixed(2)} leva more.`);
    } else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - totalPrice).toFixed(2)} leva left.`);
    }
}



