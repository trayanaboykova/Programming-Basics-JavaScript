function cinemaVoucher(input) {
    let voucherValue = Number(input[0])

    let ticketsCount = 0
    let otherPurchasesCount = 0

    for (let i = 1; i < input.length; i++) {
        let purchase = input[i]

        if (purchase === "End") {
            break;
        }

        let purchasePrice
        if (purchase.length > 8) {
            purchasePrice = purchase.charCodeAt(0) + purchase.charCodeAt(1)
        } else {
            purchasePrice = purchase.charCodeAt(0)
        }

        if (purchasePrice > voucherValue) {
            break
        }

        if (purchase.length > 8) {
            ticketsCount++
        } else {
            otherPurchasesCount++
        }

        voucherValue -= purchasePrice
    }

    console.log(ticketsCount)
    console.log(otherPurchasesCount)
}