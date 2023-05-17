function vacationBookList(input){
    let countPages = Number(input[0]);
    let pagesPerHours = Number(input[1]);
    let countDays = Number(input[2]);
    let totalHours = countPages / pagesPerHours;
    let neededHours = totalHours / countDays;
    console.log(neededHours);
}
