function main(input) {
    let filmingTime = Number(input[0]);
    let scenes = Number(input[1]);
    let sceneDuration = Number(input[2]);

    let preparationTime = Math.floor(filmingTime * 0.15);
    let totalScenesTime = scenes * sceneDuration;
    let totalTimeNeeded = preparationTime + totalScenesTime;

    if (totalTimeNeeded <= filmingTime) {
        let timeLeft = filmingTime - totalTimeNeeded;
        console.log(`You managed to finish the movie on time! You have ${timeLeft} minutes left!`);
    } else {
        let timeNeeded = totalTimeNeeded - filmingTime;
        console.log(`Time is up! To complete the movie you need ${timeNeeded} minutes.`);
    }
}