function trekkingMania(index){
    let countGroups = Number(index[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;

    for (let i = 1; i <= countGroups; i++) {
        let group = Number(index[i]);
        total += group;
        if (group <= 5) {
            musala += group;
        } else if (group <= 12) {
            monblan += group;
        } else if (group <= 25) {
            kilimandjaro += group;
        } else if (group <= 40) {
            k2 += group;
        } else {
            everest += group;
        }
    }

    let percentMusala = musala / total * 100;
    let percentMonblan = monblan / total * 100;
    let percentKilimandjaro = kilimandjaro / total * 100;
    let percentK2 = k2 / total * 100;
    let percentEverest = everest / total * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblan.toFixed(2)}%`);
    console.log(`${percentKilimandjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
}