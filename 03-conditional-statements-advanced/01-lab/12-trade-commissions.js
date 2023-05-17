function tradeCommissions(input){
    let town = input[0];
    let sales = Number(input[1]);

    let result = 0.00;

    if (sales >= 0 && sales <= 500) {
        switch (town) {
            case "Sofia":
                result = sales * 0.05;
                break;
            case "Varna":
                result = sales * 0.045;
                break;
            case "Plovdiv":
                result = sales * 0.055;
                break;
            default:
                console.log("error");
                break;
        }
    } else if (sales > 500 && sales <= 1000) {
        switch (town) {
            case "Sofia":
                result = sales * 0.07;
                break;
            case "Varna":
                result = sales * 0.075;
                break;
            case "Plovdiv":
                result = sales * 0.08;
                break;
            default:
                console.log("error");
                break;
        }
    } else if (sales > 1000 && sales <= 10000) {
        switch (town) {
            case "Sofia":
                result = sales * 0.08;
                break;
            case "Varna":
                result = sales * 0.10;
                break;
            case "Plovdiv":
                result = sales * 0.12;
                break;
            default:
                console.log("error");
                break;
        }
    } else if (sales > 10000) {
        switch (town) {
            case "Sofia":
                result = sales * 0.12;
                break;
            case "Varna":
                result = sales * 0.13;
                break;
            case "Plovdiv":
                result = sales * 0.145;
                break;
            default:
                console.log("error");
                break;
        }
    } else {
        console.log("error");
    }
    if (result !== 0) {
        console.log(`${result.toFixed(2)}`)
    }
}