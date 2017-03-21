let nums: number[] = [2, 6, 5];
for (let i: number = 0; i < nums.length; i++) {
    let num: number = nums[i];
    let result: string = "m";
    for (let k: number = num; k > 0; k--) {
        if (k == 1 || k == num / 2)
            result += "h";
        result += "u";
    }
    console.log(result);
}
