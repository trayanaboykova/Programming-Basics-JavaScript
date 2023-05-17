function operationsBetweenNumbers(index){
    let n1 = Number(index[0]);
    let n2 = Number(index[1]);
    let operator = index[2];

    let result = 0;
    let evenOrOdd = "";

    switch (operator) {
        case "+":
            result = n1 + n2;
            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${n1} + ${n2} = ${result.toFixed(0)} - ${evenOrOdd}`);
            break;
        case "-":
            result = n1 - n2;
            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${n1} - ${n2} = ${result.toFixed(0)} - ${evenOrOdd}`);
            break;
        case "*":
            result = n1 * n2;
            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${n1} * ${n2} = ${result.toFixed(0)} - ${evenOrOdd}`);
            break;
        case "/":
            if (n1 === 0) {
                console.log(`Cannot divide ${n2} by zero`);
            } else if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 / n2;
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            if (n1 === 0) {
                console.log(`Cannot divide ${n2} by zero`);
            } else if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 % n2;
                console.log(`${n1} % ${n2} = ${result.toFixed(0)}`);
            }
            break;
    }
}