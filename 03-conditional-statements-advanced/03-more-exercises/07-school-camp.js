function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsCount = parseInt(input[2]);
    let nightsCount = parseInt(input[3]);

    let pricePerNight = 0;
    let sport = "";

    switch (season) {
        case "Winter":
            if (groupType === "boys") {
                pricePerNight = 9.60;
                sport = "Judo";
            } else if (groupType === "girls") {
                pricePerNight = 9.60;
                sport = "Gymnastics";
            } else if (groupType === "mixed") {
                pricePerNight = 10;
                sport = "Ski";
            }
            break;
        case "Spring":
            if (groupType === "boys") {
                pricePerNight = 7.20;
                sport = "Tennis";
            } else if (groupType === "girls") {
                pricePerNight = 7.20;
                sport = "Athletics";
            } else if (groupType === "mixed") {
                pricePerNight = 9.50;
                sport = "Cycling";
            }
            break;
        case "Summer":
            if (groupType === "boys") {
                pricePerNight = 15;
                sport = "Football";
            } else if (groupType === "girls") {
                pricePerNight = 15;
                sport = "Volleyball";
            } else if (groupType === "mixed") {
                pricePerNight = 20;
                sport = "Swimming";
            }
            break;
    }

    let totalPrice = pricePerNight * nightsCount * studentsCount;

    if (studentsCount >= 50) {
        totalPrice *= 0.50;
    } else if (studentsCount >= 20) {
        totalPrice *= 0.85;
    } else if (studentsCount >= 10) {
        totalPrice *= 0.95;
    }

    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
}