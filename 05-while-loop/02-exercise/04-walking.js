function stepsToGoal(stepsArr) {
    let goal = 10000;
    let steps = 0;
    let index = 0;
    let input = stepsArr[index];

    while (input !== "Going home") {
        steps += Number(input);
        if (steps >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${steps - goal} steps over the goal!`);
            return;
        }
        index++;
        input = stepsArr[index];
    }

    index++;
    input = stepsArr[index];
    let stepsToHome = Number(input);
    steps += stepsToHome;

    if (steps >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${steps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - steps} more steps to reach goal.`);
    }
}
