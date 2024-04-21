function oddEvenPosition(input) {
    let n = parseInt(input[0]);
    input = input.slice(1).map(Number);

    let oddSum = 0, evenSum = 0;
    let oddMin = Number.POSITIVE_INFINITY, oddMax = Number.NEGATIVE_INFINITY;
    let evenMin = Number.POSITIVE_INFINITY, evenMax = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < n; i++) {
        let num = input[i];

        if ((i + 1) % 2 !== 0) {
            oddSum += num;
            if (num < oddMin) {
                oddMin = num;
            }
            if (num > oddMax) {
                oddMax = num;
            }
        } else {
            evenSum += num;
            if (num < evenMin) {
                evenMin = num;
            }
            if (num > evenMax) {
                evenMax = num;
            }
        }
    }

    console.log("OddSum=" + oddSum.toFixed(2) + ",");
    console.log("OddMin=" + (oddMin === Number.POSITIVE_INFINITY ? "No" : oddMin.toFixed(2)) + ",");
    console.log("OddMax=" + (oddMax === Number.NEGATIVE_INFINITY ? "No" : oddMax.toFixed(2)) + ",");
    console.log("EvenSum=" + evenSum.toFixed(2) + ",");
    console.log("EvenMin=" + (evenMin === Number.POSITIVE_INFINITY ? "No" : evenMin.toFixed(2)) + ",");
    console.log("EvenMax=" + (evenMax === Number.NEGATIVE_INFINITY ? "No" : evenMax.toFixed(2)));
}

