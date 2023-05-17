function maxNumber(index){
    let i = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    while (index[i] !== "Stop") {
        let number = Number(index[i]);

        if (number > maxNumber) {
            maxNumber = number;
        }
        i++;
    }
    console.log(maxNumber);
}



