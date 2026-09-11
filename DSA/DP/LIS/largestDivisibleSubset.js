var largestDivisibleSubset = function (nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    return LISTab(nums, n);

};
var LISTab = function (nums, n) {
    const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        for (let prev = i - 1; prev >= -1; prev--) {
            let len = 0 + dp[i + 1][prev + 1];
            let pick = 0;
            if (prev === -1 || nums[i] % nums[prev] === 0) {
                pick = 1 + dp[i + 1][i + 1];
            }
            dp[i][prev + 1] = Math.max(pick, len);
        }
    }
    const result = [];

    let i = 0;
    let prev = -1;

    while (i < n) {
        let pick = -1;

        if (
            prev === -1 ||
            nums[i] % nums[prev] === 0
        ) {
            pick = 1 + dp[i + 1][i + 1];
        }

        // If picking gives the optimal answer
        if (pick === dp[i][prev + 1]) {

            result.push(nums[i]);

            prev = i;
            i++;

        } else {

            i++;
        }
    }

    return result;
};




const nums = [1, 2, 4, 8];

console.log(largestDivisibleSubset(nums));