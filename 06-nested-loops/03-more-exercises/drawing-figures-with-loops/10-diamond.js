function diamond(input) {
    const n = parseInt(input[0]);
    let leftRight = Math.floor((n - 1) / 2);

    for (let i = 0; i < Math.ceil(n / 2); i++) {
        let result = '';
        result += '-'.repeat(leftRight);
        result += '*';
        const mid = n - 2 * leftRight - 2;

        if (mid >= 0) {
            result += '-'.repeat(mid);
            result += '*';
        }

        result += '-'.repeat(leftRight);

        console.log(result);
        leftRight--;
    }

    leftRight = 1;
    for (let i = Math.floor((n - 1) / 2 - 1); i >= 0; i--) {
        let result = '';
        result += '-'.repeat(leftRight);
        result += '*';

        const mid = n - 2 * leftRight - 2;

        if (mid >= 0) {
            result += '-'.repeat(mid);
            result += '*';
        }

        result += '-'.repeat(leftRight);

        console.log(result);
        leftRight++;
    }
}