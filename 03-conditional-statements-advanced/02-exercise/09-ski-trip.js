function skiTrip(index){
    let days = Number(index[0]);
    let typeRoom = index[1];
    let rating = index[2];

    let price = 0;
    let totalSum = 0;
    switch (typeRoom) {
        case "room for one person":
            price = 18.00;
            totalSum = price * (days - 1);
            break;
        case "apartment":
            price = 25;
            if (days < 10) {
                totalSum = (price * (days - 1)) - (price * (days - 1) * 0.30);
            } else if (days <= 15) {
                totalSum = (price * (days - 1)) - (price * (days - 1) * 0.35);
            } else {
                totalSum = (price * (days - 1)) - (price * (days - 1) * 0.50);
            }
            break;
        case "president apartment":
            price = 35;
            if (days < 10) {
                totalSum = (price * (days - 1)) - (price * (days - 1) * 0.10);
            } else if (days <= 15) {
                totalSum = (price * (days - 1)) - (price * (days - 1) * 0.15);
            } else {
                totalSum = (price * (days - 1)) - (price * (days - 1) * 0.20);
            }
            break;
    }

    if (rating === "positive") {
        totalSum = totalSum + totalSum * 0.25;
    } else {
        totalSum = totalSum - totalSum * 0.10;
    }

    console.log(`${totalSum.toFixed(2)}`);


}