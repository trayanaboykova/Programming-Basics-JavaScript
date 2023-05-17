function fishingBoat(index){
    let budget = Number(index[0]);
    let season = index[1];
    let countFishermen = Number(index[2]);

    let priceShip = 0;

    switch (season) {
        case "Spring":
            priceShip = 3000;
            break;
        case "Summer":
        case "Autumn":
            priceShip = 4200;
            break;
        case "Winter":
            priceShip = 2600;
            break;
    }

    if(countFishermen <= 6){
        priceShip = priceShip - (priceShip * 0.10);

    }else if(countFishermen <= 11){
        priceShip = priceShip - (priceShip * 0.15);

    }else{
        priceShip = priceShip - (priceShip * 0.25);

    }

    if(season !== "Autumn" && countFishermen % 2 === 0){
        priceShip = priceShip - (priceShip * 0.05);
    }

    if(priceShip <= budget){
        console.log(`Yes! You have ${(budget - priceShip).toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money! You need ${(priceShip - budget).toFixed(2)} leva.`);
    }
}