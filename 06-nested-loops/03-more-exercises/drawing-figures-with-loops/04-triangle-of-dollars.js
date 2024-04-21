function triangleOfDollars(input) {
    let n = parseInt(input[0]);

    for (let row = 1; row <= n; row++) {
        let output = "";
        for (let col = 1; col <= row; col++) {
            output += "$ ";
        }
        console.log(output.trim());
    }
}