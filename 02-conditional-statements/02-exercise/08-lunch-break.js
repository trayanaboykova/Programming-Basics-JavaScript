function lunchBreak(input){
    let tvShow = input[0];
    let tvShowTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8.00;
    let relaxTime = breakTime / 4.00;

    let timeLeft = breakTime - (lunchTime + relaxTime);

    if(timeLeft >= tvShowTime){
        console.log(`You have enough time to watch ${tvShow} and left with ${Math.ceil(timeLeft - tvShowTime).toFixed(0)} minutes free time.`);
    }else {
        console.log(`You don't have enough time to watch ${tvShow}, you need ${Math.ceil(tvShowTime - timeLeft).toFixed(0)} more minutes.`);
    }
}