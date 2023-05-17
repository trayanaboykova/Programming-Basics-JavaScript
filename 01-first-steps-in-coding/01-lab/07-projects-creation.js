function projects(input) {
    let name = input[0];
    let countProjects = Number(input[1]);
    let neededHours = countProjects * 3;

    console.log(`The architect ${name} will need ${neededHours} hours to complete ${countProjects} project/s.`);
}
