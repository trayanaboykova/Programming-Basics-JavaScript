function main(input) {
    let bestPlayer = "";
    let bestGoals = 0;
    let hatTrick = false;

    let i = 0;
    while (true) {
        let playerName = input[i];
        if (playerName === "END") {
            break;
        }

        let goals = Number(input[i + 1]);

        if (goals >= 10) {
            bestPlayer = playerName;
            bestGoals = goals;
            hatTrick = true;
            break;
        }

        if (goals > bestGoals) {
            bestPlayer = playerName;
            bestGoals = goals;
            if (goals >= 3) {
                hatTrick = true;
            } else {
                hatTrick = false;
            }
        }
        i += 2;
    }

    console.log(bestPlayer + " is the best player!");
    if (hatTrick) {
        console.log("He has scored " + bestGoals + " goals and made a hat-trick !!!");
    } else {
        console.log("He has scored " + bestGoals + " goals.");
    }
}