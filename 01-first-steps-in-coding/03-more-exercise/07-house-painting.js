function housePainting(input) {
    let x = parseFloat(input[0]);
    let y = parseFloat(input[1]);
    let h = parseFloat(input[2]);

    let sideWall = x * y;
    let window = 1.5 * 1.5;
    let sides = 2 * sideWall - 2 * window;
    let backWall = x * x;
    let entrance = 1.2 * 2;
    let frontAndBack = 2 * backWall - entrance;

    let totalAreaWalls = sides + frontAndBack;
    let greenPaint = totalAreaWalls / 3.4;

    let roof = 2 * (x * y);
    let triangle = 2 * (x * h / 2);

    let totalAreaRoof = roof + triangle;
    let redPaint = totalAreaRoof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}