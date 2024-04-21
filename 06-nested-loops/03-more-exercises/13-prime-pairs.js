function primePairs(input) {
    let firstPair = parseInt(input[0]);
    let secondPair = parseInt(input[1]);
    let firstPairLimit = parseInt(input[2]);
    let secondPairLimit = parseInt(input[3]);

    for (let first = firstPair; first <= firstPair + firstPairLimit; first++) {
        for (let second = secondPair; second <= secondPair + secondPairLimit; second++) {
            let sqrt1 = Math.floor(Math.sqrt(first));
            let sqrt2 = Math.floor(Math.sqrt(second));

            let isPrime1 = checkPrime(first, sqrt1);
            let isPrime2 = checkPrime(second, sqrt2);

            if (isPrime1 && isPrime2) {
                console.log(`${first}${second}`);
            }
        }
    }

    function checkPrime(number, sqrtNumber) {
        if (number < 2) {
            return false;
        }

        for (let i = 2; i <= sqrtNumber; i++) {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }
}