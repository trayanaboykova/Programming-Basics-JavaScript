function fishMarket(input) {
    let mackerelPrice = parseFloat(input[0]);
    let spratPrice = parseFloat(input[1]);
    let bonitoKilos = parseFloat(input[2]);
    let scadKilos = parseFloat(input[3]);
    let clamsKilos = parseInt(input[4]);

    let bonitoPrice = mackerelPrice + mackerelPrice * 0.60;
    let scadPrice = spratPrice + spratPrice * 0.80;
    let clamsPrice = clamsKilos * 7.50;

    let bonito = bonitoKilos * bonitoPrice;
    let scad = scadKilos * scadPrice;

    let total = clamsPrice + bonito + scad;

    console.log(total.toFixed(2));
}