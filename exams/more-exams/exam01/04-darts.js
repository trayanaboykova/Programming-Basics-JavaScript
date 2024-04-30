function darts(input) {
    let playerName = input.shift();
    let points = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;

    while (true) {
        let shotType = input.shift();

        if (shotType === "Retire") {
            return `${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`;
        }

        let pointsHit = Number(input.shift());

        if (shotType === "Single") {
            pointsHit *= 1;
        } else if (shotType === "Double") {
            pointsHit *= 2;
        } else if (shotType === "Triple") {
            pointsHit *= 3;
        }

        if (pointsHit <= points) {
            points -= pointsHit;
            successfulShots++;
        } else {
            unsuccessfulShots++;
        }

        if (points === 0) {
            return `${playerName} won the leg with ${successfulShots} shots.`;
        }
    }
}
