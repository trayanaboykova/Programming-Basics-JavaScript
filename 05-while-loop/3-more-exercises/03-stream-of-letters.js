function streamOfLetters(input) {
    let currentWord = '';
    let result = '';

    let foundC = false, foundO = false, foundN = false;

    for(let i = 0; i < input.length; i++) {
        if (input[i] === "End") {
            break;
        }

        let ch = input[i];
        if (!/[a-zA-Z]/.test(ch)) {
            continue;
        }

        if (ch === 'c' || ch === 'o' || ch === 'n') {
            if (ch === 'c' && !foundC) {
                foundC = true;
            } else if (ch === 'o' && !foundO) {
                foundO = true;
            } else if (ch === 'n' && !foundN) {
                foundN = true;
            } else {
                currentWord += ch;
            }

            if (foundC && foundO && foundN) {
                result += currentWord + ' ';
                currentWord = '';
                foundC = foundO = foundN = false;
            }
        } else {
            currentWord += ch;
        }
    }

    console.log(result.trim());
}