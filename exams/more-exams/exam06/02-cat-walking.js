function catWalk(input) {
    let minutesPerWalk = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let caloriesIntakePerDay = Number(input[2]);

    let totalMinutesPerDay = minutesPerWalk * walksPerDay;
    let burnedCaloriesPerDay = totalMinutesPerDay * 5;

    if (burnedCaloriesPerDay >= caloriesIntakePerDay * 0.5) {
        return `Yes, the walk for your cat is enough. Burned calories per day: ${burnedCaloriesPerDay}.`;
    } else {
        return `No, the walk for your cat is not enough. Burned calories per day: ${burnedCaloriesPerDay}.`;
    }
}