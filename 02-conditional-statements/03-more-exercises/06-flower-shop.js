function flowerShop(input) {
    let magnoliasCount = parseInt(input[0]);
    let hyacinthsCount = parseInt(input[1]);
    let rosesCount = parseInt(input[2]);
    let cactiCount = parseInt(input[3]);
    let giftPrice = parseFloat(input[4]);

    let priceMagnolia = 3.25;
    let priceHyacinth = 4.00;
    let priceRose = 3.50;
    let priceCactus = 8.00;

    let totalRevenue = (magnoliasCount * priceMagnolia) +
        (hyacinthsCount * priceHyacinth) +
        (rosesCount * priceRose) +
        (cactiCount * priceCactus);

    let taxes = totalRevenue * 0.05;

    let profitAfterTaxes = totalRevenue - taxes;

    let remainingMoney = profitAfterTaxes - giftPrice;

    if (remainingMoney >= 0) {
        console.log("She is left with " + Math.floor(remainingMoney) + " leva.");
    } else {
        console.log("She will have to borrow " + Math.ceil(-remainingMoney) + " leva.");
    }
}