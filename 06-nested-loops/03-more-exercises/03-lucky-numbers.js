function luckyNumbers(input) {
    let N = parseInt(input[0]);
    let output = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            let firstTwoSum = a + b;
            if (N % firstTwoSum === 0) {
                for (let c = 1; c <= 9; c++) {
                    for (let d = 1; d <= 9; d++) {
                        if (firstTwoSum === (c + d)) {
                            let number = "" + a + b + c + d;
                            output += number + " ";
                        }
                    }
                }
            }
        }
    }

    console.log(output.trim());
}