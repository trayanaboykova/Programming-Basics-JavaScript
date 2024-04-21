function sleepyTomCat(input) {
    let restDays = parseInt(input[0]);

    let workDays = 365 - restDays;
    let playTime = workDays * 63 + restDays * 127;

    let difference = Math.abs(30000 - playTime);
    let hoursDifference = Math.floor(difference / 60);
    let minutesDifference = difference % 60;

    if (playTime > 30000) {
        console.log("Tom will run away");
        console.log(hoursDifference + " hours and " + minutesDifference + " minutes more for play");
    } else {
        console.log("Tom sleeps well");
        console.log(hoursDifference + " hours and " + minutesDifference + " minutes less for play");
    }
}

