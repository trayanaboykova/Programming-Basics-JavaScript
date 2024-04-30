function main(input) {
    let capacity = Number(input[0]);
    let totalIncome = 0;

    for (let line of input.slice(1)) {
        if (line === "Movie time!") {
            console.log(`There are ${capacity} seats left in the cinema.`);
            break;
        }

        let peopleCount = Number(line);

        if (peopleCount > capacity) {
            console.log("The cinema is full.");
            break;
        }

        capacity -= peopleCount;
        let currentIncome = peopleCount * 5;
        if (peopleCount % 3 === 0) {
            currentIncome -= 5;
        }
        totalIncome += currentIncome;
    }

    console.log(`Cinema income - ${totalIncome} lv.`);
}