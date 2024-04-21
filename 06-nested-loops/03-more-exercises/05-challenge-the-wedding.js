function challengeTheWedding(input) {
    let maleCount = parseInt(input[0]);
    let femaleCount = parseInt(input[1]);
    let maxTables = parseInt(input[2]);

    let output = "";
    let tables = 0;

    for (let male = 1; male <= maleCount; male++) {
        for (let female = 1; female <= femaleCount; female++) {
            output += "(" + male + " <-> " + female + ") ";
            tables++;

            if (tables === maxTables || (male === maleCount && female === femaleCount)) {
                console.log(output.trim());
                return;
            }
        }
    }

    console.log(output.trim());
}