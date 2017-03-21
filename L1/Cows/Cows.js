let nums = [2, 6, 5];
for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let result = "m";
    for (let k = num; k > 0; k--) {
        if (k == 1 || k == num / 2)
            result += "h";
        result += "u";
    }
    console.log(result);
}
//# sourceMappingURL=Cows.js.map