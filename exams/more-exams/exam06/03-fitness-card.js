function main(input) {
    let budget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let cardPrice = 0;

    switch (sport) {
        case "Gym":
            cardPrice = gender == 'm' ? 42 : 35;
            break;
        case "Boxing":
            cardPrice = gender == 'm' ? 41 : 37;
            break;
        case "Yoga":
            cardPrice = gender == 'm' ? 45 : 42;
            break;
        case "Zumba":
            cardPrice = gender == 'm' ? 34 : 31;
            break;
        case "Dances":
            cardPrice = gender == 'm' ? 51 : 53;
            break;
        case "Pilates":
            cardPrice = gender == 'm' ? 39 : 37;
            break;
    }

    if (age <= 19) {
        cardPrice *= 0.8; // 20% discount for students
    }

    if (budget >= cardPrice) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        let moneyNeeded = cardPrice - budget;
        console.log(`You don't have enough money! You need $${moneyNeeded.toFixed(2)} more.`);
    }
}