function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let freeSpace = width * length * height;

    let i = 3;
    while (input[i] !== "Done") {
        let boxes = Number(input[i]);
        freeSpace -= boxes;
        if (freeSpace <= 0) {
            break;
        }
        i++;
    }

    if (freeSpace >= 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    } else {
        console.log(
            `No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`
        );
    }
}



