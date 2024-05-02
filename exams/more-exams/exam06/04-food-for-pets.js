function main(input) {
    let days = Number(input[0]);
    let allFood = Number(input[1]);
    let biscuits = 0;
    let eatenFood = 0;
    let dogEaten = 0;
    let catEaten = 0;

    let idx = 2;
    for (let i = 1; i <= days; i++) {
        let dogEat = Number(input[idx++]);
        let catEat = Number(input[idx++]);
        eatenFood += dogEat + catEat;
        dogEaten += dogEat;
        catEaten += catEat;
        if (i % 3 === 0) {
            let dayFood = dogEat + catEat;
            biscuits += dayFood * 0.10;
        }
    }

    let foodEatenPercent = eatenFood / allFood * 100;
    let dogEatenPercent = dogEaten / eatenFood * 100;
    let catEatenPercent = catEaten / eatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${foodEatenPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEatenPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEatenPercent.toFixed(2)}% eaten from the cat.`);
}
