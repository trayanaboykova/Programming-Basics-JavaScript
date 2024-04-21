function safePasswordsGenerator(input) {
    const A_MIN_ASCII = 35;
    const A_MAX_ASCII = 55;
    const B_MIN_ASCII = 64;
    const B_MAX_ASCII = 96;
    const PASS_SEP = "|";

    let xMaxValue = parseInt(input[0]);
    let yMaxValue = parseInt(input[1]);
    let numPasswords = parseInt(input[2]);

    let numPassGenerated = 0;
    let passTemplate_A_ASCII = A_MIN_ASCII;
    let passTemplate_B_ASCII = B_MIN_ASCII;
    let passTemplate_x_Value = 1;
    let output = '';

    for (let x = 1; x <= xMaxValue; x++) {
        if (numPassGenerated === numPasswords) break;
        for (let passTemplate_y_Value = 1; passTemplate_y_Value <= yMaxValue; passTemplate_y_Value++) {

            if (passTemplate_A_ASCII > A_MAX_ASCII) passTemplate_A_ASCII = A_MIN_ASCII;
            let passTemplate_A = String.fromCharCode(passTemplate_A_ASCII);
            if (passTemplate_B_ASCII > B_MAX_ASCII) passTemplate_B_ASCII = B_MIN_ASCII;
            let passTemplate_B = String.fromCharCode(passTemplate_B_ASCII);
            passTemplate_x_Value = x;

            let curPassword = passTemplate_A + passTemplate_B + passTemplate_x_Value + passTemplate_y_Value + passTemplate_B + passTemplate_A + PASS_SEP;
            output += curPassword;

            passTemplate_A_ASCII++;
            passTemplate_B_ASCII++;
            numPassGenerated++;
            if (numPassGenerated === numPasswords) break;
        }
    }

    console.log(output)
}