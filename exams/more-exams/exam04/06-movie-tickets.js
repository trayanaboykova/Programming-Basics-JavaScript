function main(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for (let i = a1; i < a2; i++) {
        let symbol1 = String.fromCharCode(i);

        for (let j = 1; j < n; j++) {
            for (let k = 1; k < Math.floor(n / 2); k++) {
                let symbol2 = j;
                let symbol3 = k;
                let symbol4 = i;

                if (i % 2 !== 0 && (symbol2 + symbol3 + symbol4) % 2 !== 0) {
                    console.log(`${symbol1}-${symbol2}${symbol3}${symbol4}`);
                }
            }
        }
    }
}
