function toyShop(input){
    let excursionPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlesPrice = puzzlesCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let teddyBearsPrice = teddyBearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let totalPrice = puzzlesPrice + dollsPrice + teddyBearsPrice + minionsPrice + trucksPrice;
    let toysCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;

    if (toysCount >= 50){
        totalPrice = totalPrice - (totalPrice * 0.25);
    }
    totalPrice = totalPrice - (totalPrice * 0.10);
    if (totalPrice >= excursionPrice){
        console.log(`Yes! ${(totalPrice - excursionPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(excursionPrice - totalPrice).toFixed(2)} lv needed.`);
    }
}


