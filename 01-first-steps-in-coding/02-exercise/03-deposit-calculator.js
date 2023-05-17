function depositCalculator(input){
    let depositedSum = Number(input[0]);
    let timeFrame = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;
    let sum = depositedSum + timeFrame * ((depositedSum * annualInterestRate) / 12);
    console.log(sum);
}
