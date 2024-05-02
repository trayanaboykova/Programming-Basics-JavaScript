function main(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let percent = Number(input[2]) / 100.00;
    let areaToPaint = ((height * width) * 4);
    areaToPaint -= (areaToPaint * percent);
    let currentPaintedArea = 0;
    let isPainted = false;
    let inputIndex = 3;

    while (input[inputIndex] !== "Tired!") {
        let paint = Number(input[inputIndex]);
        currentPaintedArea += paint;

        if (currentPaintedArea > areaToPaint) {
            isPainted = true;
            break;
        } else if (currentPaintedArea === areaToPaint) {
            break;
        }

        inputIndex++;
    }

    if (isPainted) {
        console.log(`All walls are painted and you have ${Math.round(currentPaintedArea - areaToPaint)} l paint left!`);
    } else if (areaToPaint === currentPaintedArea) {
        console.log("All walls are painted! Great job, Pesho!");
    } else {
        console.log(`${Math.round(areaToPaint - currentPaintedArea)} quadratic m left.`);
    }
}