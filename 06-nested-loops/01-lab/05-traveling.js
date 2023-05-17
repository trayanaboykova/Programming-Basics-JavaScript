function travel(arr) {
    let index = 0;
    while (true) {
        let destination = arr[index];
        index++;
        if (destination === "End") {
            break;
        }
        let budget = Number(arr[index]);
        index++;
        let savedMoney = 0;
        while (savedMoney < budget) {
            savedMoney += Number(arr[index]);
            index++;
        }
        console.log(`Going to ${destination}!`);
    }
}





