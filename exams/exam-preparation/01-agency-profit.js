function agencyProfit(input) {
    let airlineName = input[0];
    let adultTickets = Number(input[1]);
    let childTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let serviceFee = Number(input[4]);

    let childTicketPrice = adultTicketPrice * 0.3;
    let totalAdultPrice = adultTickets * (adultTicketPrice + serviceFee);
    let totalChildPrice = childTickets * (childTicketPrice + serviceFee);
    let totalProfit = (totalAdultPrice + totalChildPrice) * 0.2;

    console.log(`The profit of your agency from ${airlineName} tickets is ${totalProfit.toFixed(2)} lv.`);
}
