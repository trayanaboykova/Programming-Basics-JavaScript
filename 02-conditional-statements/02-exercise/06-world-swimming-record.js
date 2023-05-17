function worldSwimmingRecord(input){
    let worldRecordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeSecondsPerMeter = Number(input[2]);

    let resistance = Math.floor(distanceMeters / 15) * 12.5;
    let ivanTime = distanceMeters * timeSecondsPerMeter + resistance;

    if (ivanTime < worldRecordSeconds){
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivanTime - worldRecordSeconds).toFixed(2)} seconds slower.`);
    }
}

