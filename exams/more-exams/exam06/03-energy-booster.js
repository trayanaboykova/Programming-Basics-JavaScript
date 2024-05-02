function main(input) {
    const fruit = input[0];
    const size = input[1];
    const sets = Number(input[2]);

    let pricePerGel = 0;

    switch (fruit) {
        case 'Watermelon':
            pricePerGel = (size === 'small') ? 56 : 28.70;
            break;
        case 'Mango':
            pricePerGel = (size === 'small') ? 36.66 : 19.60;
            break;
        case 'Pineapple':
            pricePerGel = (size === 'small') ? 42.10 : 24.80;
            break;
        case 'Raspberry':
            pricePerGel = (size === 'small') ? 20 : 15.20;
            break;
    }

    let totalPrice = pricePerGel * sets * ((size === 'small') ? 2 : 5);

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85; // 15% discount
    } else if (totalPrice > 1000) {
        totalPrice *= 0.5; // 50% discount
    }

    console.log(totalPrice.toFixed(2) + ' lv.');
}
