function main(input) {
    let projection = input[0];
    let packageType = input[1];
    let tickets = Number(input[2]);

    let ticketPrice = 0;
    let totalBill = 0;

    switch (projection) {
        case "John Wick":
            switch (packageType) {
                case "Drink":
                    ticketPrice = 12;
                    break;
                case "Popcorn":
                    ticketPrice = 15;
                    break;
                case "Menu":
                    ticketPrice = 19;
                    break;
            }
            break;
        case "Star Wars":
            switch (packageType) {
                case "Drink":
                    ticketPrice = 18;
                    break;
                case "Popcorn":
                    ticketPrice = 25;
                    break;
                case "Menu":
                    ticketPrice = 30;
                    break;
            }
            if (tickets >= 4) {
                totalBill = ticketPrice * tickets * 0.7; // 30% discount for 4 or more tickets
            }
            break;
        case "Jumanji":
            switch (packageType) {
                case "Drink":
                    ticketPrice = 9;
                    break;
                case "Popcorn":
                    ticketPrice = 11;
                    break;
                case "Menu":
                    ticketPrice = 14;
                    break;
            }
            if (tickets === 2) {
                totalBill = ticketPrice * tickets * 0.85; // 15% discount for exactly 2 tickets
            }
            break;
    }

    if (totalBill === 0) {
        totalBill = ticketPrice * tickets;
    }

    console.log(`Your bill is ${totalBill.toFixed(2)} leva.`);
}