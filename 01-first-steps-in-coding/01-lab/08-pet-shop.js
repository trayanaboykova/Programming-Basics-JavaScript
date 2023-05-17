function petShop(input){
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);
    let dogFoodPrice = dogFoodCount * 2.50;
    let catFoodPrice = catFoodCount * 4;
    let total = dogFoodPrice + catFoodPrice
    console.log(total);
}
