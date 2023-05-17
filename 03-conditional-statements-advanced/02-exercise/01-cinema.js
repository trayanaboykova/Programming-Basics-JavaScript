function cinema(index){
    let type = index[0];
    let rows = Number(index[1]);
    let cols = Number(index[2]);

    let all = rows * cols;
    let price = 0;

    switch (type) {

        case "Premiere":
            price = 12;
            console.log(`${(price * all).toFixed(2)} leva`);
            break;
        case "Normal":
            price = 7.50;
            console.log(`${(price*all).toFixed(2)} leva`);
            break;
        case "Discount":
            price = 5;
            console.log(`${(price*all).toFixed(2)} leva`);
            break;
    }
}