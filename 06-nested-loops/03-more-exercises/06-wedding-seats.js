function weddingSeats(input) {
    let lastSector = input[0].charCodeAt(0);
    let firstSectorRows = parseInt(input[1]);
    let seatsOnOddRow = parseInt(input[2]);

    let totalSeats = 0;

    for (let sector = 'A'.charCodeAt(0); sector <= lastSector; sector++) {
        for (let row = 1; row <= firstSectorRows; row++) {
            let seatsOnRow = (row % 2 === 1) ? seatsOnOddRow : seatsOnOddRow + 2;
            for (let seat = 'a'.charCodeAt(0); seat < 'a'.charCodeAt(0) + seatsOnRow; seat++) {
                console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode(seat)}`);
                totalSeats++;
            }
        }
        firstSectorRows++;
    }

    console.log(totalSeats);
}