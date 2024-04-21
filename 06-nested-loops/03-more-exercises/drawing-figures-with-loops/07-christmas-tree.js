function christmasTree(input) {
    let n = parseInt(input[0]);

    function repeatString(toRepeat, count) {
        let result = "";
        for (let i = 0; i < count; i++) {
            result += toRepeat;
        }
        return result;
    }

    for (let i = 0; i <= n; i++) {
        let spaces = repeatString(" ", n - i);
        let stars = repeatString("*", i);
        console.log(spaces + stars + " | " + stars + spaces);
    }
}