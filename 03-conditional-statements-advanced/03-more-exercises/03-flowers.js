function flowers(input) {
    let chrysanthemums = parseInt(input[0]);
    let roses = parseInt(input[1]);
    let tulips = parseInt(input[2]);
    let season = input[3];
    let holiday = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            chrysanthemumsPrice = 2.00;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
            break;
        case "Autumn":
        case "Winter":
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
            break;
    }

    let totalPrice = chrysanthemums * chrysanthemumsPrice +
        roses * rosesPrice +
        tulips * tulipsPrice;

    if (holiday === 'Y') {
        totalPrice *= 1.15;
    }

    if (season === "Spring" && tulips > 7) {
        totalPrice *= 0.95;
    }

    if (season === "Winter" && roses >= 10) {
        totalPrice *= 0.90;
    }

    if ((chrysanthemums + roses + tulips) > 20) {
        totalPrice *= 0.80;
    }

    totalPrice += 2; // arrangement fee

    console.log(totalPrice.toFixed(2));
}