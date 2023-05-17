function multiplicationTable(index) {
    let number = Number(index[0]);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${number} = ${i * number}`);
    }
}
