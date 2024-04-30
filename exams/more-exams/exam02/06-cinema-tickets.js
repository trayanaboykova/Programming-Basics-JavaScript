function cinemaTickets(input) {
    let film = input.shift();

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (film !== "Finish") {
        let seats = Number(input.shift());

        let soldTickets = 0;
        let ticketType = input.shift();

        while (ticketType !== "End") {
            switch (ticketType) {
                case "student":
                    studentTickets++;
                    break;
                case "standard":
                    standardTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
            }
            soldTickets++;
            totalTickets++;

            if (soldTickets === seats) {
                break;
            }
            ticketType = input.shift();
        }
        let percentageFull = (soldTickets * 100) / seats;
        console.log(`${film} - ${percentageFull.toFixed(2)}% full.`);

        film = input.shift();
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets * 100) / totalTickets).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets * 100) / totalTickets).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets * 100) / totalTickets).toFixed(2)}% kids tickets.`);
}
