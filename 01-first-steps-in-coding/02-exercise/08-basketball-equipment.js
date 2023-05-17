function basketballEquipment(input){
    let annualTax = Number(input[0]);
    let sneakers = annualTax - (annualTax * 0.40);
    let uniform = sneakers - (sneakers * 0.20);
    let basketball = uniform / 4;
    let accessories = basketball / 5;
    let totalPrice = annualTax + sneakers + uniform + basketball + accessories;
    console.log(totalPrice);
}
