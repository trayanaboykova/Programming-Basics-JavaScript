function passwordGenerator(input) {
    let n = parseInt(input[0]);
    let l = parseInt(input[1]);

    let output = "";

    for (let d1 = 1; d1 <= n; d1++) {
        for (let d2 = 1; d2 <= n; d2++) {
            for (let l1 = 'a'.charCodeAt(0); l1 < 'a'.charCodeAt(0) + l; l1++) {
                for (let l2 = 'a'.charCodeAt(0); l2 < 'a'.charCodeAt(0) + l; l2++) {
                    for (let d3 = Math.max(d1, d2) + 1; d3 <= n; d3++) {
                        output += `${d1}${d2}${String.fromCharCode(l1)}${String.fromCharCode(l2)}${d3} `;
                    }
                }
            }
        }
    }
    console.log(output.trim());
}