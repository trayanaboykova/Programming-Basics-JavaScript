function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationCount = 0;
    let foundCombination = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinationCount++;

            if (i + j === magicNumber) {
                foundCombination = true;
                console.log(`Combination N:${combinationCount} (${i} + ${j} = ${magicNumber})`);
                break;
            }
        }
        if (foundCombination) {
            break;
        }
    }

    if (!foundCombination) {
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);
    }
}



