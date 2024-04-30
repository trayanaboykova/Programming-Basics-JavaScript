function main(input) {
    let budget = Number(input[0]);
    let numberOfSeries = Number(input[1]);

    let totalPrice = 0;

    for (let i = 2; i < 2 + 2*numberOfSeries; i += 2) {
        let seriesName = input[i];
        let seriesPrice = Number(input[i+1]);

        switch (seriesName) {
            case "Thrones":
                seriesPrice *= 0.5;
                break;
            case "Lucifer":
                seriesPrice *= 0.6;
                break;
            case "Protector":
                seriesPrice *= 0.7;
                break;
            case "TotalDrama":
                seriesPrice *= 0.8;
                break;
            case "Area":
                seriesPrice *= 0.9;
                break;
        }

        totalPrice += seriesPrice;
    }

    if (budget >= totalPrice) {
        console.log(`You bought all the series and left with ${(budget - totalPrice).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(totalPrice - budget).toFixed(2)} lv. more to buy the series!`);
    }
}