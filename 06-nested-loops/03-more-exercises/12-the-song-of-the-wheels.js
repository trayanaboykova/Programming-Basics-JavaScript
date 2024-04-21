function theSongOfTheWheels(input) {
    let num = parseInt(input[0]);

    let counter = 0;
    let g = 1;
    let h = 1;
    let j = 1;
    let k = 1;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (num === a * b + c * d) {
                        if (a < b && c > d) {
                            process.stdout.write(`${a}${b}${c}${d} `);
                            counter++;

                            if (counter === 4) {
                                g = a;
                                h = b;
                                j = c;
                                k = d;
                            }

                        }
                    }

                }
            }
        }
    }

    if (counter >= 4) {
        console.log(`\nPassword: ${g}${h}${j}${k}`);
    } else {
        console.log(`\nNo!`);
    }
}