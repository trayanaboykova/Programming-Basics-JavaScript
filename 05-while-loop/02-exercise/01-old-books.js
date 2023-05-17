function oldBooks(index){
    let wantedBook = index[0];
    let isFound = false;
    let counter = 0;
    let input = 1;
    while (index[input] !== "No More Books") {
        if (index[input] === wantedBook) {
            isFound = true;
            break;
        }
        input++;
        counter++;
    }

    if (isFound) {
        console.log(`You checked ${counter} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }
}

