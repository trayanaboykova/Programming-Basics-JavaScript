function movieRating(input) {
    let n = Number(input.shift());

    let highestRatedMovie = "";
    let highestRating = Number.MIN_VALUE;
    let lowestRatedMovie = "";
    let lowestRating = Number.MAX_VALUE;
    let totalRating = 0;

    for (let i = 0; i < n; i++) {
        let movie = input.shift();
        let rating = Number(input.shift());

        totalRating += rating;

        if (rating > highestRating) {
            highestRating = rating;
            highestRatedMovie = movie;
        }

        if (rating < lowestRating) {
            lowestRating = rating;
            lowestRatedMovie = movie;
        }
    }

    let averageRating = totalRating / n;

    console.log(`${highestRatedMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestRatedMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}