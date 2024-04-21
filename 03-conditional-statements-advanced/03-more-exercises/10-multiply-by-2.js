function multiplyBy2(input) {
    let index = 0;

    while (true) {
        let number = parseFloat(input[index]);

        if (number < 0) {
            console.log("Negative number!");
            break;
        }

        let result = number * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        index++;
    }
}