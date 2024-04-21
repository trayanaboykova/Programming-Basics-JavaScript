function lettersCombinations(input) {
    let start = input[0].charCodeAt(0);
    let end = input[1].charCodeAt(0);
    let exclude = input[2].charCodeAt(0);
    let count = 0;
    let output = "";

    for (let i = start; i <= end; i++) {
        if (i === exclude) continue;
        for (let j = start; j <= end; j++) {
            if (j === exclude) continue;
            for (let k = start; k <= end; k++) {
                if (k === exclude) continue;
                output += String.fromCharCode(i, j, k) + " ";
                count++;
            }
        }
    }

    console.log(output + count);
}