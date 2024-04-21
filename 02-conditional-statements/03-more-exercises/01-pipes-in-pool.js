function pipesInPool(input) {
    let v = parseInt(input[0]);
    let p1 = parseInt(input[1]);
    let p2 = parseInt(input[2]);
    let hours = parseFloat(input[3]);

    let water = p1 * hours + p2 * hours;

    if (water <= v) {
        console.log(`The pool is ${(water / v * 100).toFixed(2)}% full. Pipe 1: ${(p1 * hours / water * 100).toFixed(2)}%. Pipe 2: ${(p2 * hours / water * 100).toFixed(2)}%.`);
    } else {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${(water - v).toFixed(2)} liters.`);
    }
}

