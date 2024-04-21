function dishwasher(input) {
    let detergentBottles = parseInt(input[0]);

    let totalDetergent = detergentBottles * 750;

    let i = 1;
    let cycle = 1;
    let totalDishes = 0;
    let totalPots = 0;

    while (input[i] != 'End') {
        let items = parseInt(input[i]);
        let neededDetergent;

        if (cycle % 3 == 0) {
            neededDetergent = items * 15;
            totalPots += items;
        } else {
            neededDetergent = items * 5;
            totalDishes += items;
        }

        if (totalDetergent >= neededDetergent) {
            totalDetergent -= neededDetergent;
        } else {
            console.log(`Not enough detergent, ${neededDetergent - totalDetergent} ml. more necessary!`);
            return;
        }

        i++;
        cycle++;
    }

    console.log("Detergent was enough!");
    console.log(`${totalDishes} dishes and ${totalPots} pots were washed.`);
    console.log(`Leftover detergent ${totalDetergent} ml.`);
}
