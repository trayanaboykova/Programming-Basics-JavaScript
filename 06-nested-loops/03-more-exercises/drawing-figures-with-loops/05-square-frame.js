function squareFrame(input) {
    let n = parseInt(input[0]);

    for (let i = 0; i < n; i++) {
        if (i == 0 || i == n - 1) {
            let row = "+";
            for (let j = 0; j < n - 2; j++) {
                row += " -";
            }
            console.log(row + " +");
        } else {
            let row = "|";
            for (let j = 0; j < n - 2; j++) {
                row += " -";
            }
            console.log(row + " |");
        }
    }
}