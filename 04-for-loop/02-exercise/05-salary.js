function salary(index){
    let countTabs = Number(index[0]);
    let salary = Number(index[1]);

    for (let i = 2; i < countTabs + 2; i++) {
        let website = index[i];
        switch (website) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;

        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }

    }
    if (salary > 0) {
        console.log(salary);
    }

}