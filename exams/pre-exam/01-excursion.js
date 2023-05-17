function excursion(input){
    let people = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);
    let pricePerNight = nights * 20;
    let transportCardPrice = transportCards * 1.60;
    let museumTicketPrice = museumTickets * 6;

    let totalPricePerPerson = pricePerNight+ transportCardPrice + museumTicketPrice;
    let totalSum = totalPricePerPerson * people;
    let totalSumWithExpenses = totalSum + (totalSum * 0.25);
    console.log(totalSumWithExpenses.toFixed(2));
}

