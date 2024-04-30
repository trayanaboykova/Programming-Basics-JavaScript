function skeleton(input) {
    let controlMinutes = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let trackLength = Number(input[2]);
    let secondsPer100m = Number(input[3]);

    let controlTimeInSeconds = controlMinutes * 60 + controlSeconds;
    let timeReduction = (trackLength / 120) * 2.5;
    let marinTime = (trackLength / 100) * secondsPer100m - timeReduction;

    if (marinTime <= controlTimeInSeconds) {
        return `Marin Bangiev won an Olympic quota!\nHis time is ${marinTime.toFixed(3)}.`;
    } else {
        let timeDifference = marinTime - controlTimeInSeconds;
        return `No, Marin failed! He was ${timeDifference.toFixed(3)} second slower.`;
    }
}