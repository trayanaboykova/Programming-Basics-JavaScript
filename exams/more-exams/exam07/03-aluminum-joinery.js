function main(input) {
    let orders = Number(input[0]);
    let typeOfUnit = input[1];
    let delivery = input[2];
    let price, totalPrice = 0;

    if (orders < 10) {
        console.log("Invalid order");
    } else {
        switch (typeOfUnit) {
            case "90X130" :
                price = orders * 110;
                if (orders > 60) {
                    totalPrice = price - (price * 0.08);
                } else if (orders > 30) {
                    totalPrice = price - (price * 0.05);
                } else {
                    totalPrice = price;
                }
                break;
            case "100X150" :
                price = orders * 140;
                if (orders > 80) {
                    totalPrice = price - (price * 0.1);
                } else if (orders > 40) {
                    totalPrice = price - (price * 0.06);
                } else {
                    totalPrice = price;
                }
                break;
            case "130X180" :
                price = orders * 190;
                if (orders > 50) {
                    totalPrice = price - (price * 0.12);
                } else if (orders > 20) {
                    totalPrice = price - (price * 0.07);
                } else {
                    totalPrice = price;
                }
                break;
            case "200X300" :
                price = orders * 250;
                if (orders > 50) {
                    totalPrice = price - (price * 0.14);
                } else if (orders > 25) {
                    totalPrice = price - (price * 0.09);
                } else {
                    totalPrice = price;
                }
                break;
        }

        if (delivery === "With delivery") {
            totalPrice += 60;
        }
        if (orders > 99) {
            totalPrice = totalPrice - (totalPrice * 0.04);
        }
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }
}