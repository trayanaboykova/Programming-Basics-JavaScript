function solve(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "stop") {
            break;
        }

        let currentNumber = Number(input[i]);

        if (currentNumber < 0) {
            console.log("Number is negative.");
            continue;
        }

        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(currentNumber); j++) {
            if (currentNumber % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && currentNumber !== 1) {
            primeSum += currentNumber;
        } else {
            nonPrimeSum += currentNumber;
        }
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}


