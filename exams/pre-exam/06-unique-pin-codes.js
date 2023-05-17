function uniquePINCodes(input) {
    let upFirst = Number(input[0]);
    let upSecond = Number(input[1]);
    let upThird = Number(input[2]);

    for (let i = 2; i <= upFirst; i += 2) {
        for (let j = 2; j <= upSecond; j++) {
            if (j === 2 || j === 3 || j === 5 || j === 7) {
                for (let r = 2; r <= upThird; r += 2) {
                    console.log(`${i} ${j} ${r}`);
                }
            }
        }
    }
}




uniquePINCodes(["3", "5", "5"]);

//uniquePinCodes(["8", "2", "8"]);

