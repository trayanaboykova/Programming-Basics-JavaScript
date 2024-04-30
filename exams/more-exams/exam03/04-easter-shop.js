function easterShop(input) {
    let initialEggs = Number(input[0]);
    let soldEggs = 0;
    let index = 1;

    while (true) {
        let command = input[index++];
        if (command === "Close") {
            console.log("Store is closed!");
            console.log(`${soldEggs} eggs sold.`);
            break;
        }

        let eggsCount = Number(input[index++]);

        if (command === "Buy") {
            if (eggsCount <= initialEggs) {
                initialEggs -= eggsCount;
                soldEggs += eggsCount;
            } else {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${initialEggs}.`);
                break;
            }
        } else if (command === "Fill") {
            initialEggs += eggsCount;
        }
    }
}