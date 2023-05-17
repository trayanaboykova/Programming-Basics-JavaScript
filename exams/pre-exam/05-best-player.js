function bestPlayer(players) {
    let bestPlayer = '';
    let bestGoals = 0;
    let hatTrick = false;

    for (let i = 0; i < players.length; i += 2) {
        const player = players[i];
        const goals = parseInt(players[i + 1], 10);

        if (goals > bestGoals) {
            bestGoals = goals;
            bestPlayer = player;

            if (goals >= 3) {
                hatTrick = true;
            } else {
                hatTrick = false;
            }
        }

        if (bestGoals >= 10) {
            break;
        }
    }

    console.log(`${bestPlayer} is the best player!`);
    if (hatTrick) {
        console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestGoals} goals.`);
    }
}


