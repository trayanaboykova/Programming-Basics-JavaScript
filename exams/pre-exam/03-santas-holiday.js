function santaHoliday(input) {
    let daysStaying = Number(input[0]) - 1;
    let roomType = input[1];
    let review = input[2];
    let roomPrice = 0;
    let discount = 0;
    let priceWithDiscount = 0;
    let totalPrice = 0;

    switch (roomType) {
        case "room for one person":
            roomPrice = daysStaying * 18.00;
            if (review === "positive") {
                roomPrice += roomPrice * 0.25;
            } else if (review === "negative") {
                roomPrice -= roomPrice * 0.10;
            }
            totalPrice = roomPrice - discount;
            console.log(totalPrice.toFixed(2));
            break;

        case "apartment":
            roomPrice = daysStaying * 25.00;
            if (daysStaying < 10) {
                discount = roomPrice * 0.30;
                priceWithDiscount = roomPrice - discount;
            } else if (daysStaying >= 10 && daysStaying <= 15) {
                discount = roomPrice * 0.35;
                priceWithDiscount = roomPrice - discount;
            } else if (daysStaying > 15) {
                discount = roomPrice * 0.50;
                priceWithDiscount = roomPrice - discount;
            }
            if (review === "positive") {
                priceWithDiscount += priceWithDiscount * 0.25;
            } else if (review === "negative") {
                priceWithDiscount -= priceWithDiscount * 0.10;
            }
            console.log(priceWithDiscount.toFixed(2));
            break;

        case "president apartment":
            roomPrice = daysStaying * 35.00;
            if (daysStaying < 10) {
                discount = roomPrice * 0.10;
                priceWithDiscount = roomPrice - discount;
            } else if (daysStaying >= 10 && daysStaying <= 15) {
                discount = roomPrice * 0.15;
                priceWithDiscount = roomPrice - discount;
            } else if (daysStaying > 15) {
                discount = roomPrice * 0.20;
                priceWithDiscount = roomPrice - discount;
            }
            if (review === "positive") {
                priceWithDiscount += priceWithDiscount * 0.25;
            } else if (review === "negative") {
                priceWithDiscount -= priceWithDiscount * 0.10;
            }

            console.log(priceWithDiscount.toFixed(2));
            break;
    }
}


