function main(input) {
    let movieName = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercentage = Number(input[4]);

    let dailyIncome = tickets * ticketPrice;
    let totalIncome = dailyIncome * days;
    let cinemaIncome = totalIncome * cinemaPercentage / 100;
    let studioIncome = totalIncome - cinemaIncome;

    console.log(`The profit from the movie ${movieName} is ${studioIncome.toFixed(2)} lv.`);
}
