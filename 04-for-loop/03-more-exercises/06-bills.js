function bills(input) {
    let months = parseInt(input[0]);
    input = input.slice(1).map(Number);

    let totalElectricity = 0;
    const waterPerMonth = 20.0;
    const internetPerMonth = 15.0;
    let totalWater = months * waterPerMonth;
    let totalInternet = months * internetPerMonth;
    let totalOther = 0;
    let totalExpenses = 0;

    for (let i = 0; i < months; i++) {
        let electricity = input[i];
        totalElectricity += electricity;
        let monthlyCosts = electricity + waterPerMonth + internetPerMonth;
        let other = monthlyCosts * 1.20;
        totalOther += other;
    }

    totalExpenses = totalElectricity + totalWater + totalInternet + totalOther;
    let averageExpenses = totalExpenses / months;

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${averageExpenses.toFixed(2)} lv`);
}