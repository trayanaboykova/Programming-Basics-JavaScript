function specialNumbers(input) {
    const n = Number(input[0]);
    let result = '';
    for (let i = 1111; i <= 9999; i++) {
        let currentNumber = i;
        let isSpecial = true;
        while (currentNumber > 0) {
            let digit = currentNumber % 10;
            if (n % digit !== 0) {
                isSpecial = false;
                break;
            }
            currentNumber = Math.floor(currentNumber / 10);
        }
        if (isSpecial) {
            result += i + ' ';
        }
    }
    console.log(result.trim());
}
