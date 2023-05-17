function newHouse(index){
    let type = index[0];
    let count = Number(index[1]);
    let budget = Number(index[2]);

    let priceRoses = 5;
    let priceDahlias = 3.80;
    let priceTulips = 2.80;
    let priceNarcissus = 3;
    let priceGladiolus = 2.50;
    let price = 0;

    switch (type) {
        case "Roses":
            price = priceRoses * count;
            break;
        case "Dahlias":
            price = priceDahlias * count;
            break;
        case "Tulips":
            price = priceTulips * count;
            break;
        case "Narcissus":
            price = priceNarcissus * count;
            break;
        case "Gladiolus":
            price = priceGladiolus * count;
            break;
    }

    if(type === "Roses" && count > 80){
        price = price - price * 0.10;

    }else if (type === "Dahlias" && count > 90){
        price = price - price * 0.15;

    }else if(type === "Tulips" && count > 80){
        price = price - price * 0.15;

    }else if(type === "Narcissus" && count < 120){
        price = price + price * 0.15;

    }else if(type === "Gladiolus" && count < 80){
        price = price + price * 0.20;
    }

    if(price <= budget){
        console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - price).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}