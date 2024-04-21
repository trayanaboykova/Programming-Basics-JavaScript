function sumOfTwoNumbers(input) {
    let startNum = parseInt(input[0]);
    let endNum = parseInt(input[1]);
    let magicNum = parseInt(input[2]);

    let counter = 0;
    let isFound = false;

    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            counter++;
            if (i + j === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${i + j})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}