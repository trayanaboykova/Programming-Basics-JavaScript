function main(input) {
    let clients = Number(input[0]);

    let totalBill = 0;
    let index = 1;

    for (let i = 0; i < clients; i++) {
        let basketCount = 0;
        let wreathCount = 0;
        let bunnyCount = 0;

        while (input[index] !== "Finish") {
            switch (input[index]) {
                case "basket":
                    basketCount++;
                    break;
                case "wreath":
                    wreathCount++;
                    break;
                case "chocolate bunny":
                    bunnyCount++;
                    break;
            }
            index++;
        }

        let totalCount = basketCount + wreathCount + bunnyCount;
        let currentBill = basketCount * 1.50 + wreathCount * 3.80 + bunnyCount * 7.00;

        if (totalCount % 2 == 0) {
            currentBill *= 0.80;
        }

        totalBill += currentBill;
        console.log(`You purchased ${totalCount} items for ${currentBill.toFixed(2)} leva.`);

        index++;
    }

    let averageBill = totalBill / clients;
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);
}