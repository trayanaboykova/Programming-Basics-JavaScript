function vacation(index) {
    let needMoney = Number(index[0]);
    let savedMoney = Number(index[1]);
    let countSpendDays = 0;
    let countDays = 0;

    while (savedMoney < needMoney && countSpendDays < 5) {
        let action = index[countDays * 2 + 2];
        let currentMoney = Number(index[countDays * 2 + 3]);

        if (action === "spend") {
            savedMoney -= currentMoney;
            countSpendDays++;
            if (savedMoney < 0) {
                savedMoney = 0;
            }
        } else if (action === "save") {
            savedMoney += currentMoney;
            countSpendDays = 0;
        }

        countDays++;
    }

    if (countSpendDays === 5) {
        console.log("You can't save the money.");
        console.log(countDays);
    } else {
        console.log(`You saved the money for ${countDays} days.`);
    }
}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])


