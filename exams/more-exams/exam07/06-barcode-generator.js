function main(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let startUnits = start % 10;
    let startTens = Math.floor(start / 10) % 10;
    let startHundreds = Math.floor(start / 100) % 10;
    let startThousands = Math.floor(start / 1000) % 10;

    let endUnits = end % 10;
    let endTens = Math.floor(end / 10) % 10;
    let endHundreds = Math.floor(end / 100) % 10;
    let endThousands = Math.floor(end / 1000) % 10;

    let result = '';

    for (let i = startThousands; i <= endThousands; i++) {
        for (let j = startHundreds; j <= endHundreds; j++) {
            for (let k = startTens; k <= endTens; k++) {
                for (let l = startUnits; l <= endUnits; l++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        result += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }

    console.log(result.trim());
}
