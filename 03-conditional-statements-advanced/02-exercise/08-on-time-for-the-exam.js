function onTimeForTheExam(index){
    let examHour = Number(index[0]);
    let examMin = Number(index[1]);
    let hourOfArrival = Number(index[2]);
    let minOfArrival = Number(index[3]);

    let examAllMin = examHour * 60 + examMin;
    let arriveAllMin = hourOfArrival * 60 + minOfArrival;

    let diff = arriveAllMin - examAllMin;

    if (diff > 0) {
        console.log("Late");
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            let hours = Math.floor(diff / 60);
            let minutes = diff % 60;
            console.log(`${hours}:${minutes.toString().padStart(2, '0')} hours after the start`);
        }
    } else if (diff >= -30) {
        console.log("On time");
        if (diff !== 0) {
            console.log(`${Math.abs(diff)} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (diff > -60) {
            console.log(`${Math.abs(diff)} minutes before the start`);
        } else {
            let hours = Math.floor(Math.abs(diff) / 60);
            let minutes = Math.abs(diff) % 60;
            console.log(`${hours}:${minutes.toString().padStart(2, '0')} hours before the start`);
        }
    }
}
