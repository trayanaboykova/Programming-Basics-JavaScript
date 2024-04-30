function oscarsCinemaWeek(input) {
    let film = input.shift();
    let hallType = input.shift();
    let ticketsCount = Number(input.shift());

    let ticketPrice = 0;

    switch (film) {
        case "A Star Is Born":
            switch (hallType) {
                case "normal":
                    ticketPrice = 7.50;
                    break;
                case "luxury":
                    ticketPrice = 10.50;
                    break;
                case "ultra luxury":
                    ticketPrice = 13.50;
                    break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (hallType) {
                case "normal":
                    ticketPrice = 7.35;
                    break;
                case "luxury":
                    ticketPrice = 9.45;
                    break;
                case "ultra luxury":
                    ticketPrice = 12.75;
                    break;
            }
            break;
        case "Green Book":
            switch (hallType) {
                case "normal":
                    ticketPrice = 8.15;
                    break;
                case "luxury":
                    ticketPrice = 10.25;
                    break;
                case "ultra luxury":
                    ticketPrice = 13.25;
                    break;
            }
            break;
        case "The Favourite":
            switch (hallType) {
                case "normal":
                    ticketPrice = 8.75;
                    break;
                case "luxury":
                    ticketPrice = 11.55;
                    break;
                case "ultra luxury":
                    ticketPrice = 13.95;
                    break;
            }
            break;
    }

    let totalIncome = ticketPrice * ticketsCount;

    return `${film} -> ${totalIncome.toFixed(2)} lv.`;
}