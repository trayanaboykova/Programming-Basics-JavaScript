function main(input) {
    let bitcoins = Number(input[0]);
    let chineseYuans = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinsToLeva = bitcoins * 1168;
    let chineseYuansToDollars = chineseYuans * 0.15;
    let dollarsToLeva = chineseYuansToDollars * 1.76;

    let totalLeva = bitcoinsToLeva + dollarsToLeva;
    let totalEuros = totalLeva / 1.95;

    let commissionAmount = totalEuros * (commission / 100);
    let finalAmount = totalEuros - commissionAmount;

    console.log(finalAmount.toFixed(2));
}