function accountBalance(input) {
    let balance = 0;
    let i = 0;

    while (input[i] !== "NoMoreMoney") {
        let currentBalance = Number(input[i]);
        if (currentBalance < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += currentBalance;
        console.log(`Increase: ${currentBalance.toFixed(2)}`);
        i++;
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}


