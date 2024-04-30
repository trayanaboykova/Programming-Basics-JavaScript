function highJump(input) {
    let desiredHeight = Number(input.shift());
    let currentHeight = desiredHeight - 30;
    let jumps = 0;
    let failedAttempts = 0;

    while (true) {
        let jumpHeight = Number(input.shift());
        jumps++;

        if (jumpHeight > currentHeight) {
            currentHeight += 5;
            failedAttempts = 0;
        } else {
            failedAttempts++;
        }

        if (failedAttempts === 3) {
            return `Tihomir failed at ${currentHeight}cm after ${jumps} jumps.`;
        } else if (currentHeight > desiredHeight) {
            return `Tihomir succeeded, he jumped over ${currentHeight - 5}cm after ${jumps} jumps.`;
        }
    }
}