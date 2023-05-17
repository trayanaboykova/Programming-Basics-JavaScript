function suppliesForSchool(input){
    let countPens = Number(input[0]);
    let countMarkers = Number(input[1]);
    let detergentLiters = Number(input[2]);
    let discount = Number(input[3])/100;
    let pens = 5.80;
    let markers = 7.20;
    let detergent = 1.20;
    let pensPrice = countPens * pens;
    let markersPrice = countMarkers * markers;
    let detergentPrice = detergentLiters * detergent;
    let totalPrice = pensPrice + markersPrice + detergentPrice;
    let discountedPrice = totalPrice - (totalPrice * discount);
    console.log(discountedPrice);
}
