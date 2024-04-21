function rhombusOfStars(input) {
    let n = parseInt(input[0]);

    for (let row = 1; row <= n; row++) {
        let output = "";
        for (let spaces = 1; spaces <= n - row; spaces++) {
            output += " ";
        }
        output += "*";
        for (let stars = 1; stars < row; stars++) {
            output += " *";
        }
        console.log(output);
    }

    for (let row = n - 1; row >= 1; row--) {
        let output = "";
        for (let spaces = 1; spaces <= n - row; spaces++) {
            output += " ";
        }
        output += "*";
        for (let stars = 1; stars < row; stars++) {
            output += " *";
        }
        console.log(output);
    }
}