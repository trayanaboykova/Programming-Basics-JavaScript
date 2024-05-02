function main(input) {
    let mostPowerfulWord = "";
    let maxPower = Number.MIN_SAFE_INTEGER;
    let inputIndex = 0;

    while (true) {
        let word = input[inputIndex];
        if (word === "End of words") {
            break;
        }

        let sum = 0;
        for (let i = 0; i < word.length; i++) {
            let ch = word.charCodeAt(i);
            sum += ch;
        }

        let power;
        if ("aeiouyAEIOUY".indexOf(word.charAt(0)) !== -1) {
            power = sum * word.length;
        } else {
            power = Math.floor(sum / word.length);
        }

        if (power > maxPower) {
            maxPower = power;
            mostPowerfulWord = word;
        }

        inputIndex++;
    }

    console.log(`The most powerful word is ${mostPowerfulWord} - ${maxPower}`);
}
