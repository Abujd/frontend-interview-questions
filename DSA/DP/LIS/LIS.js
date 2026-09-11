var lengthOfLIS = function (nums) {

    const n = nums.length;
    const dp = Array.from({ length: n }, () => new Array(n + 1).fill(-1));

    // return LIS(nums, n, 0, -1, dp)
    return LISTab(nums, n);

};
var LIS = function (nums, n, i, prev, dp) {

    if (i === n) return 0;
    if (dp[i][prev + 1] !== -1) return dp[i][prev + 1];
    let notPick = 0 + LIS(nums, n, i + 1, prev, dp);
    let pick = 0
    if (prev === -1 || nums[prev] < nums[i]) {
        pick = 1 + LIS(nums, n, i + 1, i, dp);
    }

    dp[i][prev + 1] = Math.max(notPick, pick);

    return dp[i][prev + 1];
}
var LISTab = function (nums, n) {
    const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        for (let prev = i - 1; prev >= -1; prev--) {
            let len = 0 + dp[i + 1][prev + 1];
            let pick = 0;
            if (prev === -1 || nums[prev] < nums[i]) {
                pick = 1 + dp[i + 1][i + 1];
            }
            dp[i][prev + 1] = Math.max(pick, len);
        }
    }

    return dp[0][0]

}

const nums = [0, 1, 0, 3, 2, 3]

console.log(lengthOfLIS(nums));