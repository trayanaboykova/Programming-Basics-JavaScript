function journey(index){
    let budget = Number(index[0]);
    let season = index[1];

    let price = 0;
    let type = "";
    let destination = "";

    if (budget <= 100) {
        destination = "Bulgaria";

        if (season === "summer") {
            price = budget * 0.30;
            type = "Camp";
        } else {
            price = budget * 0.70;
            type = "Hotel";
        }

    } else if (budget <= 1000) {
        destination = "Balkans";

        if (season === "summer") {
            price = budget * 0.40;
            type = "Camp";

        } else {
            price = budget * 0.80;
            type = "Hotel";
        }
    } else {
        destination = "Europe";

        price = budget * 0.90;
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);

}