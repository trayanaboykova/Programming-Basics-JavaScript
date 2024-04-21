function happyCatParking(input) {
    let days = parseInt(input[0]);
    let hours = parseInt(input[1]);

    let sumToPayAfterParking = 0;

    for (let daysCount = 1; daysCount <= days; daysCount++) {

        let currentSum = 0;

        for (let hoursCount = 1; hoursCount <= hours; hoursCount++) {
            if (daysCount % 2 === 0 && hoursCount % 2 !== 0) {
                currentSum += 2.5;
            } else if (daysCount % 2 !== 0 && hoursCount % 2 === 0) {
                currentSum += 1.25;
            } else {
                currentSum += 1;
            }
        }
        console.log(`Day: ${daysCount} - ${currentSum.toFixed(2)} leva`);
        sumToPayAfterParking += currentSum;

    }
    console.log(`Total: ${sumToPayAfterParking.toFixed(2)} leva`);
}