function main(input) {
    let bestMovieTitle = "";
    let bestMovieScore = Number.MIN_SAFE_INTEGER;
    let moviesCount = 0;

    for (let movieTitle of input) {
        if (movieTitle === "STOP") {
            break;
        }

        let score = 0;
        let length = movieTitle.length;

        for (let i = 0; i < length; i++) {
            let c = movieTitle.charCodeAt(i);
            if (c >= 65 && c <= 90) { // if character is uppercase
                score += c - length;
            } else if (c >= 97 && c <= 122) { // if character is lowercase
                score += c - (2 * length);
            } else {
                score += c;
            }
        }

        if (score > bestMovieScore) {
            bestMovieTitle = movieTitle;
            bestMovieScore = score;
        }

        moviesCount++;
        if (moviesCount === 7) {
            console.log("The limit is reached.");
            break;
        }
    }

    console.log(`The best movie for you is ${bestMovieTitle} with ${bestMovieScore} ASCII sum.`);
}
