function numbers(index){
    let n = Number(index[0]);
    let sum = 0;
    let currentIndex = 1;
    while (sum < n) {
        let number = Number(index[currentIndex]);
        sum += number;
        currentIndex++;

    }
    console.log(sum);
}