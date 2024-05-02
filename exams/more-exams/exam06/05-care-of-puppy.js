function main(input) {
    let foodQuantity = Number(input[0]);
    let totalFoodEaten = 0;

    for(let i=1; i<input.length; i++) {
        if (input[i] === "Adopted") break;
        else {
            let foodEaten = Number(input[i]);
            totalFoodEaten += foodEaten;
        }
    }

    let foodLeft = foodQuantity * 1000 - totalFoodEaten;

    if (foodLeft >= 0) {
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);
    } else {
        let neededFood = Math.abs(foodLeft);
        console.log(`Food is not enough. You need ${neededFood} grams more.`);
    }
}