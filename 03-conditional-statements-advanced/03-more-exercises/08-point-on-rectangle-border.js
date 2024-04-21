function pointOnRectangleBorder(input) {
    let x1 = parseFloat(input[0]);
    let y1 = parseFloat(input[1]);
    let x2 = parseFloat(input[2]);
    let y2 = parseFloat(input[3]);
    let x = parseFloat(input[4]);
    let y = parseFloat(input[5]);

    let isOnBorder = (x === x1 || x === x2) && (y >= y1 && y <= y2)
        || (y === y1 || y === y2) && (x >= x1 && x <= x2);

    if (isOnBorder) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}