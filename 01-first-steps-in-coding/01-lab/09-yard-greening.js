function yardGreening(input){
    let greeningArea = Number(input[0]);
    let price = 7.61;
    let finalPrice = greeningArea * price;
    let discount = finalPrice * 0.18;
    let totalPrice = finalPrice - discount;
    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
