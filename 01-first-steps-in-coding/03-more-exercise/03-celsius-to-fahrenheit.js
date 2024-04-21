function celsiusToFahrenheit(input) {
    let degreesCelsius = parseFloat(input[0]);
    let degreesFahrenheit = degreesCelsius * 1.8 + 32;
    console.log(degreesFahrenheit.toFixed(2));
}