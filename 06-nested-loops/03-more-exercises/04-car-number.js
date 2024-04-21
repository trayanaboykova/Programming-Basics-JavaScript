function carNumber(input) {
    let start = parseInt(input[0]);
    let end = parseInt(input[1]);
    let output = "";

    function isValidNumber(a, b, c, d) {
        let startEndCondition = (a % 2 === 0 && d % 2 !== 0) || (a % 2 !== 0 && d % 2 === 0);
        let firstLastDigitCondition = a > d;
        let secondThirdSumCondition = (b + c) % 2 === 0;

        return startEndCondition && firstLastDigitCondition && secondThirdSumCondition;
    }

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            for (let c = start; c <= end; c++) {
                for (let d = start; d <= end; d++) {
                    if (isValidNumber(a, b, c, d)) {
                        let number = "" + a + b + c + d;
                        output += number + " ";
                    }
                }
            }
        }
    }

    console.log(output.trim());
}