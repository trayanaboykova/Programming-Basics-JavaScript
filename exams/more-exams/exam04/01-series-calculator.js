function main(input) {
    let seriesName = input[0];
    let seasons = Number(input[1]);
    let episodesPerSeason = Number(input[2]);
    let episodeDuration = Number(input[3]);

    let totalDuration = 0;

    for (let season = 1; season <= seasons; season++) {
        for (let episode = 1; episode <= episodesPerSeason; episode++) {
            let episodeWithAds = episodeDuration * 1.2; // 20% longer due to ads
            if (episode === episodesPerSeason) // Special episode at the end of each season
                episodeWithAds += 10;
            totalDuration += episodeWithAds;
        }
    }

    console.log(`Total time needed to watch the ${seriesName} series is ${Math.round(totalDuration)} minutes.`);
}