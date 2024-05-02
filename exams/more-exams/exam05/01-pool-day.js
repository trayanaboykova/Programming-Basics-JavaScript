function main(input) {
    let numberOfPeople = Number(input[0]);
    let entranceFee = Number(input[1]);
    let sunbedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let umbrellasNeeded = Math.ceil(numberOfPeople / 2.0);
    let sunbedsNeeded = Math.ceil(numberOfPeople * 0.75);

    let totalCost = numberOfPeople * entranceFee + umbrellasNeeded * umbrellaPrice + sunbedsNeeded * sunbedPrice;

    console.log(totalCost.toFixed(2) + " lv.");
}
