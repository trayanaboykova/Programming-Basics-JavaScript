function password(index){
    let username = index[0];
    let password = index[1];
    let data = index[2];
    let counter = 3;


    while ( data !== password){
        data = index[counter];
        counter++;
    }
    console.log(`Welcome ${username}!`);
}

