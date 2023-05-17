function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percent = Number(input[3]) / 100;
    let volumeFishTank = length * width * heigth;
    let volumeLiters = volumeFishTank / 1000;
    let litersNeeded = volumeLiters * (1 - percent);
    console.log(litersNeeded);
}
