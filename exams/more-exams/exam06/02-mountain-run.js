function main(input) {
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let climbTime = distanceMeters * secondsPerMeter;

    let additionalTime = Math.floor(distanceMeters / 50) * 30;

    climbTime += additionalTime;

    if (climbTime < recordSeconds) {
        console.log(`Yes! The new record is ${climbTime.toFixed(2)} seconds.`);
    } else {
        let timeDifference = climbTime - recordSeconds;
        console.log(`No! He was ${timeDifference.toFixed(2)} seconds slower.`);
    }
}