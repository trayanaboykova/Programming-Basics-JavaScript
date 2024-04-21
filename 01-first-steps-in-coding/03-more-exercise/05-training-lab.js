function calculateDesks(input) {
    let length = parseFloat(input[0]);
    let width = parseFloat(input[1]) - 1;

    let widthDesks = Math.floor(width / 0.7);
    let lengthDesks = Math.floor(length / 1.2);

    let freeSpace = widthDesks * lengthDesks - 3;

    console.log(freeSpace.toFixed(0));
}