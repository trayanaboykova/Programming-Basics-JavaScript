function trekkingMania(input) {
    let groups = Number(input[0]);
    let musala = 0, monblan = 0, kilimanjaro = 0, k2 = 0, everest = 0;
    let totalPeople = 0;

    for(let i = 1; i <= groups; i++) {
        let peopleInGroup = Number(input[i]);
        totalPeople += peopleInGroup;

        if (peopleInGroup <= 5){
            musala += peopleInGroup;
        } else if (peopleInGroup > 5 && peopleInGroup <= 12) {
            monblan += peopleInGroup;
        } else if (peopleInGroup > 12 && peopleInGroup <= 25) {
            kilimanjaro += peopleInGroup;
        } else if (peopleInGroup > 25 && peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else {
            everest += peopleInGroup;
        }
    }

    let result = [
        (musala / totalPeople) * 100,
        (monblan / totalPeople) * 100,
        (kilimanjaro / totalPeople) * 100,
        (k2 / totalPeople) * 100,
        (everest / totalPeople) * 100
    ].map(x => `${x.toFixed(2)}%`).join('\n');

    return result;
}
