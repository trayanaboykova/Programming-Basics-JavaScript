function workout(input) {
    let n = Number(input[0]);
    let firstDay = Number(input[1]);
    let allKg = firstDay;

    for (let i = 2; i < input.length; i++) {
        let nextDay = Number(input[i]);
        firstDay += firstDay * (nextDay / 100);
        allKg += firstDay;
    }

    if (allKg >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(allKg - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - allKg)} more kilometers`);
    }
}








