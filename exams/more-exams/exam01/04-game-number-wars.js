function numberWars(input) {
    let firstPlayer = input.shift();
    let secondPlayer = input.shift();

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    let inputLine = input.shift();

    while (inputLine !== "End of game") {
        let firstPlayerCard = Number(inputLine);
        let secondPlayerCard = Number(input.shift());

        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += firstPlayerCard - secondPlayerCard;
        } else if (secondPlayerCard > firstPlayerCard) {
            secondPlayerPoints += secondPlayerCard - firstPlayerCard;
        } else {
            console.log("Number wars!");
            let additionalFirstPlayerCard = Number(input.shift());
            let additionalSecondPlayerCard = Number(input.shift());

            if (additionalFirstPlayerCard > additionalSecondPlayerCard) {
                return `${firstPlayer} is winner with ${firstPlayerPoints} points`;
            } else {
                return `${secondPlayer} is winner with ${secondPlayerPoints} points`;
            }
        }

        inputLine = input.shift();
    }

    let result = `${firstPlayer} has ${firstPlayerPoints} points\n`;
    result += `${secondPlayer} has ${secondPlayerPoints} points`;

    return result;
}