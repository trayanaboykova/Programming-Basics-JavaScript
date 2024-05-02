function main(input) {
    let totalGamesSold = Number(input[0]);

    let hearthstoneSales = 0;
    let forniteSales = 0;
    let overwatchSales = 0;
    let otherGamesSales = 0;

    for (let i = 1; i <= totalGamesSold; i++) {
        let gameName = input[i];
        switch (gameName) {
            case "Hearthstone":
                hearthstoneSales++;
                break;
            case "Fornite":
                forniteSales++;
                break;
            case "Overwatch":
                overwatchSales++;
                break;
            default:
                otherGamesSales++;
                break;
        }
    }

    let hearthstonePercentage = (hearthstoneSales / totalGamesSold) * 100;
    let fornitePercentage = (forniteSales / totalGamesSold) * 100;
    let overwatchPercentage = (overwatchSales / totalGamesSold) * 100;
    let otherGamesPercentage = (otherGamesSales / totalGamesSold) * 100;

    console.log(`Hearthstone - ${hearthstonePercentage.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercentage.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercentage.toFixed(2)}%`);
    console.log(`Others - ${otherGamesPercentage.toFixed(2)}%`);
}
