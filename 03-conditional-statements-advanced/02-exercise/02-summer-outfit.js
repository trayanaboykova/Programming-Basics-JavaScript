function summerOutfit(index){
    let degrees = Number(index[0]);
    let time = index[1];

    let outfit = "";
    let shoes = "";

    switch (time) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";

            } else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";

            } else if (degrees >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }

            break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";

            } else if (degrees > 18 && degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";

            } else if (degrees >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }

            break;
        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins";

            break;
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.\n`);
}
