function pets(input) {
    let daysAway = parseInt(input[0]);
    let foodLeft = parseInt(input[1]);
    let foodPerDayDog = parseFloat(input[2]);
    let foodPerDayCat = parseFloat(input[3]);
    let foodPerDayTurtleGrams = parseFloat(input[4]);

    let foodPerDayTurtle = foodPerDayTurtleGrams / 1000;

    let totalFoodDog = foodPerDayDog * daysAway;
    let totalFoodCat = foodPerDayCat * daysAway;
    let totalFoodTurtle = foodPerDayTurtle * daysAway;

    let totalFoodNeeded = totalFoodDog + totalFoodCat + totalFoodTurtle;

    let foodDifference = foodLeft - totalFoodNeeded;

    if (foodDifference >= 0) {
        console.log(Math.floor(foodDifference) + " kilos of food left.");
    } else {
        console.log(Math.ceil(-foodDifference) + " more kilos of food are needed.");
    }
}