function repainting(input){
    let nylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let paintThinnerNeeded = Number(input[2]);
    let hoursWork = Number(input[3]);
    let nylon = 1.50;
    let paint = 14.50;
    let paintThinner = 5.00;
    let plasticBagPrice = 0.40;

    let nylonPrice = (nylonNeeded + 2) * nylon;
    let paintPrice = (paintNeeded * paint) * 1.10;
    let thinnerPrice = paintThinnerNeeded * paintThinner;
    let sum = nylonPrice + paintPrice + thinnerPrice + plasticBagPrice;
    let workSum = (sum * 0.30) * hoursWork;
    let totalSum = sum + workSum;
    console.log(totalSum);

}

