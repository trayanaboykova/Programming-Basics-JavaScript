function evenPowersOf2(index){
    let n = Number(index[0]);
    for (let i = 0; i <= n; i += 2) {
        console.log(`${(Math.pow(2, i)).toFixed(0)}`);
    }
}