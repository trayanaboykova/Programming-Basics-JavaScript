function easterBakery(input) {
    let flourPricePerKg = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggCrates = Number(input[3]);
    let yeastPackets = Number(input[4]);

    let sugarPricePerKg = flourPricePerKg * 0.75;
    let eggPricePerCrate = flourPricePerKg * 1.1;
    let yeastPricePerPacket = sugarPricePerKg * 0.2;

    let flourTotal = flourPricePerKg * flourKg;
    let sugarTotal = sugarPricePerKg * sugarKg;
    let eggTotal = eggPricePerCrate * eggCrates;
    let yeastTotal = yeastPricePerPacket * yeastPackets;

    let totalPrice = flourTotal + sugarTotal + eggTotal + yeastTotal;

    console.log(totalPrice.toFixed(2));
}