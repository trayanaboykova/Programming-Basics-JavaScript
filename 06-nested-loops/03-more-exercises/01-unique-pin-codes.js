function uniquePINCodes(input) {
    let upperLimit1 = parseInt(input[0]);
    let upperLimit2 = parseInt(input[1]);
    let upperLimit3 = parseInt(input[2]);

    function isPrime(number) {
        if (number <= 1) return false;
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= upperLimit1; i += 2) {
        for (let j = 2; j <= upperLimit2; j++) {
            if (isPrime(j) && j <= 7) {
                for (let k = 2; k <= upperLimit3; k += 2) {
                    console.log(i + " " + j + " " + k);
                }
            }
        }
    }
}