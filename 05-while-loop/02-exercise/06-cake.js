function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let totalPieces = width * length;
    let i = 2;

    while (totalPieces >= 0) {
        if (input[i] === "STOP") {
            break;
        }

        let currentPieces = Number(input[i]);
        totalPieces -= currentPieces;
        i++;
    }

    if (totalPieces > 0) {
        console.log(`${totalPieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
    }
}