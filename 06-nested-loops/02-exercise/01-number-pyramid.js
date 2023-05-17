function printPyramid(n) {
    let current = 1;
    let printCurrentLine = '';

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            if (current > n) {
                break;
            }
            printCurrentLine += `${current} `;
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (current > n) {
            break;
        }
    }
}

