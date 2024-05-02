function main(input) {
    let totalMoney = 0;
    let days = Number(input[0]);
    let hours = Number(input[1]);

    for (let i = 1; i <= days; i++) {
        let dayTotalMoney = 0;
        for (let j = 1; j <= hours; j++) {

            if (i % 2 === 0 && j % 2 !== 0) {
                dayTotalMoney += 2.50;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                dayTotalMoney += 1.25;
            } else {
                dayTotalMoney += 1;
            }

        }
        totalMoney += dayTotalMoney;
        console.log(`Day: ${i} - ${dayTotalMoney.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalMoney.toFixed(2)} leva`);
}