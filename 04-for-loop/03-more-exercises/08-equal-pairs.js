function equalPairs(input) {
    let n = parseInt(input[0]);
    input = input.slice(1).map(Number);

    let previousPairSum = 0;
    let currentPairSum = 0;
    let isEqual = true;
    let maxDiff = 0;

    if (n > 0) {
        let firstNum = input[0];
        let secondNum = input[1];
        previousPairSum = firstNum + secondNum;
        input = input.slice(2);
    }

    for (let i = 0; i < n - 1; i++) {
        let num1 = input[2*i];
        let num2 = input[2*i + 1];
        currentPairSum = num1 + num2;

        if (currentPairSum !== previousPairSum) {
            isEqual = false;
            let currentDiff = Math.abs(currentPairSum - previousPairSum);
            if (currentDiff > maxDiff) {
                maxDiff = currentDiff;
            }
        }

        previousPairSum = currentPairSum;
    }

    if (isEqual) {
        console.log("Yes, value=" + previousPairSum);
    } else {
        console.log("No, maxdiff=" + maxDiff);
    }
}