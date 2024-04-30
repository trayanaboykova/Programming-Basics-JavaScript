function movieStars(input) {
    let budget = Number(input[0]);
    let remainingBudget = budget;
    let i = 1;

    while (input[i] != "ACTION") {
        let actorName = input[i];
        let payment;
        if (actorName.length <= 15) {
            payment = Number(input[++i]);
        } else {
            payment = remainingBudget * 0.2;
        }

        remainingBudget -= payment;

        if (remainingBudget < 0) {
            let neededBudget = Math.abs(remainingBudget);
            return `We need ${neededBudget.toFixed(2)} leva for our actors.`;
        }

        i++;
    }

    return `We are left with ${remainingBudget.toFixed(2)} leva.`;
}