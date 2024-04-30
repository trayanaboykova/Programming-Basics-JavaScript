function tennisEquipment(input) {
    let racketPrice = parseFloat(input[0]);
    let racketCount = parseInt(input[1]);
    let shoesCount = parseInt(input[2]);

    let shoesPrice = racketPrice / 6;
    let totalRacketPrice = racketPrice * racketCount;
    let totalShoesPrice = shoesPrice * shoesCount;
    let otherEquipmentPrice = (totalRacketPrice + totalShoesPrice) * 0.2;
    let totalPrice = totalRacketPrice + totalShoesPrice + otherEquipmentPrice;

    let djokovicPrice = Math.floor(totalPrice / 8);
    let sponsorsPrice = Math.ceil(totalPrice * 7 / 8);

    return `Price to be paid by Djokovic ${djokovicPrice}\nPrice to be paid by sponsors ${sponsorsPrice}`;
}