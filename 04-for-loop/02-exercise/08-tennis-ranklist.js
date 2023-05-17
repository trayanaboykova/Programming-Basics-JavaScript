function tennisRankList(index){
    let games = Number(index[0]);
    let startPoints = Number(index[1]);
    let win = 0;
    let points = 0;

    for (let i = 2; i < games + 2; i++) {
        let type = index[i];
        if (type === "W") {
            points += 2000;
            win++;
        } else if (type === "F") {
            points += 1200;
        } else {
            points += 720;
        }


    }
    let percentWin = (win / games) * 100;
    let totalPoints = startPoints + points;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(points / games).toFixed(0)}`);
    console.log(`${percentWin.toFixed(2)}%`);

}