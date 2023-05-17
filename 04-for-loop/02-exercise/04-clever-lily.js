function cleverLily(index){
    let n = Number(index[0]);
    let washingMachine = Number(index[1]);
    let toyPrice = Number(index[2]);

    let moneyForBD = 0;
    let toys = 0;
    let countMoney = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            if (i === 2) {
                moneyForBD = 10.00;
            } else {
                moneyForBD += 10.00 * i / 2;
            }
            countMoney++;
        } else {
            toys++;
        }
    }
    let money = moneyForBD - countMoney;

    let moneyFromToys = toyPrice * toys;

    let totalMoney = money + moneyFromToys;

    if (totalMoney >= washingMachine) {
        console.log(`Yes! ${(totalMoney - washingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachine - totalMoney).toFixed(2)}`);
    }
}