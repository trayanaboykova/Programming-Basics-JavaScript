function main(input) {
    let price = Number(input[0]);
    let kgOfLuggage = Number(input[1]);
    let dayBeforeDeparture = Number(input[2]);
    let numOfLuggage = Number(input[3]);
    let totalLuggagePrice = 0;

    if (kgOfLuggage < 10) {
        totalLuggagePrice = price * 0.2;
    } else if (kgOfLuggage >= 10 && kgOfLuggage <= 20) {
        totalLuggagePrice = price * 0.5;
    } else {
        totalLuggagePrice = price;
    }

    if (dayBeforeDeparture < 7) {
        totalLuggagePrice += totalLuggagePrice * 0.4;
    } else if (dayBeforeDeparture >= 7 && dayBeforeDeparture <= 30) {
        totalLuggagePrice += totalLuggagePrice * 0.15;
    } else {
        totalLuggagePrice += totalLuggagePrice * 0.1;
    }

    totalLuggagePrice *= numOfLuggage;

    console.log(`The total price of bags is: ${totalLuggagePrice.toFixed(2)} lv.`);
}