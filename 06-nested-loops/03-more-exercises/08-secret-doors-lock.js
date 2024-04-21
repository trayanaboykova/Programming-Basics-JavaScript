function secretDoorsLock(input) {
    let a = parseInt(input[0]);
    let b = parseInt(input[1]);
    let c = parseInt(input[2]);

    for (let i = 1; i <= a; i++) {
        if (i % 2 === 0) {
            for (let j = 1; j <= b; j++) {
                if (j === 2 || j === 3 || j === 5 || j === 7) {
                    for (let k = 1; k <= c; k++) {
                        if (k % 2 === 0) {
                            console.log(i + " " + j + " " + k);
                        }
                    }
                }
            }
        }
    }
}