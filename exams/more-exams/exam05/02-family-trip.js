function main(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentExpenses = Number(input[3]);

    if (nights > 7) {
        pricePerNight *= 0.95;
    }
    let accommodation = nights * pricePerNight;
    let expenses = budget * percentExpenses / 100;
    let neededMoney = accommodation + expenses;

    if (budget >= neededMoney) {
        console.log(`Ivanovi will be left with ${(budget - neededMoney).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(neededMoney - budget).toFixed(2)} leva needed.`);
    }
}