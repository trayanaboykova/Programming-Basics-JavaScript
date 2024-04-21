function calculateTrapezoidArea(input) {
    let b1 = parseFloat(input[0]);
    let b2 = parseFloat(input[1]);
    let height = parseFloat(input[2]);
    let area = (b1 + b2) * height / 2;
    console.log(area.toFixed(2));
}