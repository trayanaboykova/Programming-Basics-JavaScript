function bikeRace(input) {
    let juniorParticipants = parseInt(input[0]);
    let seniorParticipants = parseInt(input[1]);
    let trackType = input[2];

    let juniorFee = 0;
    let seniorFee = 0;

    switch (trackType) {
        case "trail":
            juniorFee = 5.50;
            seniorFee = 7;
            break;
        case "cross-country":
            juniorFee = 8;
            seniorFee = 9.50;
            break;
        case "downhill":
            juniorFee = 12.25;
            seniorFee = 13.75;
            break;
        case "road":
            juniorFee = 20;
            seniorFee = 21.50;
            break;
    }

    let totalParticipants = juniorParticipants + seniorParticipants;
    let totalFee = (juniorParticipants * juniorFee) + (seniorParticipants * seniorFee);

    if (trackType === "cross-country" && totalParticipants >= 50) {
        totalFee *= 0.75; // 25% discount
    }

    totalFee *= 0.95; // 5% for expenses

    console.log(totalFee.toFixed(2));
}