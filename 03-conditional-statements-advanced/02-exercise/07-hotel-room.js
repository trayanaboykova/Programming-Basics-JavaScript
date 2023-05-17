function hotelRoom(index){
    let month = index[0];
    let countNight = Number(index[1]);

    let priceStudio = 0;
    let priceApartment = 0;

    if (month === "May" || month === "October") {
        priceStudio = 50;
        priceApartment = 65;
        if (countNight > 7 && countNight <= 14) {
            priceStudio = priceStudio - priceStudio * 0.05;
        }else if(countNight > 14){
            priceStudio = priceStudio - priceStudio * 0.30;
            priceApartment = priceApartment - priceApartment * 0.10;
        }
    } else if (month === "June" || month === "September") {
        priceStudio = 75.20;
        priceApartment = 68.70;

        if(countNight > 14){
            priceApartment = priceApartment - priceApartment * 0.10;
            priceStudio = priceStudio - priceStudio * 0.20;
        }
    } else {
        priceStudio = 76;
        priceApartment = 77;
        if(countNight > 14){
            priceApartment = priceApartment - priceApartment * 0.10;
        }
    }
    console.log(`Apartment: ${(priceApartment * countNight).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceStudio * countNight).toFixed(2)} lv.`);

}