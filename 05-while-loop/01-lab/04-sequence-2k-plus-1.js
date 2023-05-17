function sequence(index){
    let n = Number(index[0]);
    let k = 1;
    while (k <= n){
        console.log(k);
        k = 2 * k + 1;
    }
}