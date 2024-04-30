function easterEggsBattle(input) {
    let firstPlayerEggs = Number(input[0]);
    let secondPlayerEggs = Number(input[1]);
    let commandIndex = 2;
    let isSecondWin = false;
    let isFirstWin = false;

    while (input[commandIndex] != "End") {
        switch (input[commandIndex]) {
            case "one":
                secondPlayerEggs--;
                break;
            case "two":
                firstPlayerEggs--;
                break;
        }
        if (firstPlayerEggs === 0) {
            isSecondWin = true;
            break;
        }
        if (secondPlayerEggs === 0) {
            isFirstWin = true;
            break;
        }
        commandIndex++;
    }

    if (isSecondWin) {
        console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
    } else if (isFirstWin) {
        console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
    } else  {
        console.log(`Player one has ${firstPlayerEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    }
}