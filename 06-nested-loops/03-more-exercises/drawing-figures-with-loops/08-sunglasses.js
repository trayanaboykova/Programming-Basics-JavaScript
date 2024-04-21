function sunglasses(input) {
    const n = parseInt(input[0]);

    function repeatSymbol(symbol, count) {
        const result = new Array(count).fill(symbol).join('');
        return result;
    }

    const stars = repeatSymbol('*', n * 2);
    const slashes = repeatSymbol('/', n * 2 - 2);
    const spaces = repeatSymbol(' ', n);

    console.log(stars + spaces + stars);

    for (let i = 0; i < n - 2; i++) {
        if (i === Math.floor((n-1) / 2) - 1) {
            console.log('*' + slashes + '*' + repeatSymbol('|', n) + '*' + slashes + '*');
        } else {
            console.log('*' + slashes + '*' + spaces + '*' + slashes + '*');
        }
    }

    console.log(stars + spaces + stars);
}

sunglasses(['6']);
// sunglasses(['4']);
// sunglasses(['5']);