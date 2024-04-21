function matchTickets(input) {
    let budget = parseFloat(input[0]);
    let category = input[1];
    let groupSize = parseInt(input[2]);

    let transportationPercentage;
    if (groupSize >= 50) {
        transportationPercentage = 0.25;
    } else if (groupSize >= 25) {
        transportationPercentage = 0.4;
    } else if (groupSize >= 10) {
        transportationPercentage = 0.5;
    } else if (groupSize >= 5) {
        transportationPercentage = 0.6;
    } else {
        transportationPercentage = 0.75;
    }

    budget -= budget * transportationPercentage;

    let ticketPrice = category === "VIP" ? 499.99 : 249.99;
    let totalPrice = ticketPrice * groupSize;

    if (budget >= totalPrice) {
        let leftMoney = budget - totalPrice;
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else {
        let neededMoney = totalPrice - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }
}