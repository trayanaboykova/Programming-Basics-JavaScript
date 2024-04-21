function calculateTriangleArea(input) {
    let a = parseFloat(input[0]);
    let h = parseFloat(input[1]);
    let area = a * h / 2;
    console.log(area.toFixed(2));
}