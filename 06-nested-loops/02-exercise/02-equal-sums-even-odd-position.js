function equalSumsOfDigits(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let result = "";

    for (let i = start; i <= end; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (evenSum === oddSum) {
            result += `${currentNum} `;
        }
    }

    console.log(result);
}