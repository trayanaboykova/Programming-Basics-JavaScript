function circleAreaAndPerimeter(input) {
    let radians = parseFloat(input[0]);

    let perimeter = 2 * Math.PI * radians;
    let area = Math.PI * radians * radians;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}