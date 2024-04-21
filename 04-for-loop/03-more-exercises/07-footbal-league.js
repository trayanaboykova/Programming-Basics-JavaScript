function footballLeague(input) {
    let stadiumCapacity = parseInt(input[0]);
    let numberOfFans = parseInt(input[1]);
    input = input.slice(2).map(String);

    let countA = 0;
    let countB = 0;
    let countV = 0;
    let countG = 0;

    for (let i = 0; i < numberOfFans; i++) {
        let sector = input[i].trim();
        switch (sector) {
            case "A":
                countA++;
                break;
            case "B":
                countB++;
                break;
            case "V":
                countV++;
                break;
            case "G":
                countG++;
                break;
            default:
                break;
        }
    }

    let percentA = (countA / numberOfFans) * 100;
    let percentB = (countB / numberOfFans) * 100;
    let percentV = (countV / numberOfFans) * 100;
    let percentG = (countG / numberOfFans) * 100;
    let percentFansCapacity = (numberOfFans / stadiumCapacity) * 100;

    console.log(`${percentA.toFixed(2)}%`);
    console.log(`${percentB.toFixed(2)}%`);
    console.log(`${percentV.toFixed(2)}%`);
    console.log(`${percentG.toFixed(2)}%`);
    console.log(`${percentFansCapacity.toFixed(2)}%`);
}