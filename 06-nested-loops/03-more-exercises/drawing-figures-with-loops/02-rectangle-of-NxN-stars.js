function rectangleOfNxNStars(input) {
    let n = parseInt(input[0]);

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += "*";
        }
        console.log(row);
    }
}