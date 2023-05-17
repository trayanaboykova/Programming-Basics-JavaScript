function shopping(input){
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardPrice = videoCardCount * 250;
    let cpuPrice = (videoCardPrice * 0.35) * cpuCount;
    let ramPrice = (videoCardPrice * 0.10) * ramCount;

    let finalPrice = 0;

    if (videoCardCount > cpuCount){
        finalPrice = (videoCardPrice + cpuPrice + ramPrice) * 0.85;
    }else {
        finalPrice = videoCardPrice + cpuPrice + ramPrice;
    }

    if (budget >= finalPrice){
        console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`)
    }else {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`)
    }
}