function averageNumber(input) {
    let n = parseInt(input[0]);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let number = parseInt(input[i]);
        sum += number;
    }

    let average = sum / n;

    console.log(average.toFixed(2));
}