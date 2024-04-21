function house(input) {
    const n = parseInt(input[0]);

    function repeatString(toRepeat, count) {
        let result = "";
        for (let i = 0; i < count; i++) {
            result += toRepeat;
        }
        return result;
    }

    let starsCount = (n % 2 === 0) ? 2 : 1;

    for (let i = 0; i < Math.ceil(n / 2); i++) {
        const stars = repeatString("*", starsCount);
        const dashes = repeatString("-", (n - starsCount) / 2);
        console.log(dashes + stars + dashes);
        starsCount += 2;
    }

    const baseRows = repeatString("|" + repeatString("*", n - 2) + "|\n", Math.floor(n / 2));
    console.log(baseRows);
}