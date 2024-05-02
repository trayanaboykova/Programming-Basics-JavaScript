function main(input) {
    let capacity = Number(input[0]);
    let casesTotalCapacity = 0;
    let casesCount = 0;
    let count = 0;

    for(let i=1; i<input.length; i++) {
        if(input[i] === "End") break;

        let cases = Number(input[i]);
        count++;

        if(count % 3 === 0) {
            casesTotalCapacity += cases + (cases * 0.1);
        } else {
            casesTotalCapacity += cases;
        }

        if(casesTotalCapacity > capacity) {
            break;
        }

        casesCount++;
    }

    if(capacity >= casesTotalCapacity) {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${casesCount} suitcases loaded.`);
    } else if(casesTotalCapacity > capacity) {
        console.log("No more space!");
        console.log(`Statistic: ${casesCount} suitcases loaded.`);
    }
}