function foodDelivery(input){
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegetarianMenu = 8.15;
    let deliveryPrice = 2.50;
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegetarianMenuCount = Number(input[2]);
    let chickenMenuPrice = chickenMenuCount * chickenMenu;
    let fishMenuPrice = fishMenuCount * fishMenu;
    let vegetarianMenuPrice = vegetarianMenuCount * vegetarianMenu;
    let totalMenuPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    let dessertPrice = totalMenuPrice * 0.20;
    let total = totalMenuPrice + dessertPrice + deliveryPrice;
    console.log(total);
}
