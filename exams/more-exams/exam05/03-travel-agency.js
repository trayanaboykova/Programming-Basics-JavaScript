function main(input) {
    let city = input[0];
    let pack = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let totalPrice = 0;

    if (days > 1) {

        if (days > 7) {
            days = days - 1;
        }

        if (!['Bansko', 'Borovets', 'Varna', 'Burgas'].includes(city) ||
            !['withEquipment', 'noEquipment', 'withBreakfast', 'noBreakfast'].includes(pack)) {
            console.log("Invalid input!");
        } else {
            switch (city) {
                case "Bansko":
                case "Borovets":
                    switch (pack) {
                        case "withEquipment":
                            totalPrice = days * 100;
                            if (vip === "yes") {
                                totalPrice -= totalPrice * 0.1;
                            }
                            break;
                        case "noEquipment":
                            totalPrice = days * 80;
                            if (vip === "yes") {
                                totalPrice -= totalPrice * 0.05;
                            }
                            break;
                    }
                    break;
                case "Varna":
                case "Burgas":
                    switch (pack) {
                        case "withBreakfast":
                            totalPrice = days * 130;
                            if (vip === "yes") {
                                totalPrice -= totalPrice * 0.12;
                            }
                            break;
                        case "noBreakfast":
                            totalPrice = days * 100;
                            if (vip === "yes") {
                                totalPrice -= totalPrice * 0.07;
                            }
                            break;
                    }
                    break;
            }
            console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
        }
    } else {
        console.log("Days must be positive number!");
    }
}