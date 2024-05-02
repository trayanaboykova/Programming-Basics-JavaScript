function christmasTournament(input) {
    let tournamentDays = Number(input.shift());
    let totalMoney = 0;
    let totalWins = 0;
    let totalLosses = 0;

    for (let day = 1; day <= tournamentDays; day++) {
        let wins = 0;
        let losses = 0;
        let moneyPerDay = 0;

        while (true) {
            let sport = input.shift();
            if (sport === "Finish") {
                break;
            }
            let result = input.shift();
            if (result === "win") {
                wins++;
                moneyPerDay += 20;
                totalWins++;
            } else {
                losses++;
                totalLosses++;
            }
        }

        if (wins > losses) {
            moneyPerDay *= 1.1;
        }

        totalMoney += moneyPerDay;
    }

    if (totalWins > totalLosses) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}