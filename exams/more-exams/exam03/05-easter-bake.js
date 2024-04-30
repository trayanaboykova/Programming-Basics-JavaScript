function main(input) {
    let numberOfKozunaks = Number(input[0]);

    let totalSugar = 0;
    let totalFlour = 0;
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlour = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= 2 * numberOfKozunaks; i += 2) {
        let sugar = Number(input[i]);
        let flour = Number(input[i + 1]);

        totalSugar += sugar;
        totalFlour += flour;

        if (sugar > maxSugar) {
            maxSugar = sugar;
        }

        if (flour > maxFlour) {
            maxFlour = flour;
        }
    }

    let sugarPackages = Math.ceil(totalSugar / 950);
    let flourPackages = Math.ceil(totalFlour / 750);

    console.log(`Sugar: ${sugarPackages}`);
    console.log(`Flour: ${flourPackages}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}