function easterLunch(input) {
    let countKozunaks = Number(input[0]);
    let countEggCrates = Number(input[1]);
    let kilogramsKurabii = Number(input[2]);

    let kozunakPrice = 3.20;
    let eggPricePerCrate = 4.35;
    let kurabiiPricePerKg = 5.40;
    let eggDyePricePerEgg = 0.15;

    let totalKozunakPrice = countKozunaks * kozunakPrice;
    let totalEggPrice = countEggCrates * eggPricePerCrate;
    let totalKurabiiPrice = kilogramsKurabii * kurabiiPricePerKg;
    let totalEggDyePrice = countEggCrates * 12 * eggDyePricePerEgg;

    let totalPrice = totalKozunakPrice + totalEggPrice + totalKurabiiPrice + totalEggDyePrice;

    console.log(totalPrice.toFixed(2));
}