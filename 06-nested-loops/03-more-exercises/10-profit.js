function profit(input) {
    let oneLev = parseInt(input[0]);
    let twoLev = parseInt(input[1]);
    let fiveLev = parseInt(input[2]);
    let sum = parseInt(input[3]);

    for (let i = 0; i <= oneLev; i++) {
        for (let j = 0; j <= twoLev; j++) {
            for (let k = 0; k <= fiveLev; k++) {
                if (i * 1 + j * 2 + k * 5 === sum) {
                    console.log(i + " * 1 lv. + " + j +" * 2 lv. + " + k +" * 5 lv. = " + sum + " lv.");
                }
            }
        }
    }
}