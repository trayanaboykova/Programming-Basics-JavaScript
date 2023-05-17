function minNumber(index){
    let i = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
    while (index[i] !== "Stop") {
        let number = Number(index[i]);

        if (number < minNumber) {
            minNumber = number;
        }
        i++;
    }
    console.log(minNumber);
}



