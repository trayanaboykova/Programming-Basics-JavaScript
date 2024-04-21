function rectangleOf10x10Stars() {
    let width = 10;
    let height = 10;

    for (let i = 0; i < height; i++) {
        let row = "";
        for (let j = 0; j < width; j++) {
            row += "*";
        }
        console.log(row);
    }
}
