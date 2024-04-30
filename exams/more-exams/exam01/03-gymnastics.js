function gymnastics(input) {
    let country = input[0];
    let apparatus = input[1];

    let difficulty = 0;
    let execution = 0;

    switch (country) {
        case "Russia":
            switch (apparatus) {
                case "ribbon":
                    difficulty = 9.100;
                    execution = 9.400;
                    break;
                case "hoop":
                    difficulty = 9.300;
                    execution = 9.800;
                    break;
                case "rope":
                    difficulty = 9.600;
                    execution = 9.000;
                    break;
            }
            break;
        case "Bulgaria":
            switch (apparatus) {
                case "ribbon":
                    difficulty = 9.600;
                    execution = 9.400;
                    break;
                case "hoop":
                    difficulty = 9.550;
                    execution = 9.750;
                    break;
                case "rope":
                    difficulty = 9.500;
                    execution = 9.400;
                    break;
            }
            break;
        case "Italy":
            switch (apparatus) {
                case "ribbon":
                    difficulty = 9.200;
                    execution = 9.500;
                    break;
                case "hoop":
                    difficulty = 9.450;
                    execution = 9.350;
                    break;
                case "rope":
                    difficulty = 9.700;
                    execution = 9.150;
                    break;
            }
            break;
    }

    let totalScore = difficulty + execution;
    let pointsNeeded = 20 - totalScore;
    let percentageNeeded = (pointsNeeded / 20) * 100;

    return `The team of ${country} get ${totalScore.toFixed(3)} on ${apparatus}.\n${percentageNeeded.toFixed(2)}%`;
}