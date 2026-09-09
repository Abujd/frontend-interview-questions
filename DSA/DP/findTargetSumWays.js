var findTargetSumWays = function (nums, target) {

    const totalSum = nums.reduce((a, b) => a + b, 0);
    if (target > totalSum || (totalSum + target) % 2 !== 0) return 0;
    let K = (totalSum + target) / 2;
    let dp = new Array(K + 1).fill(0);
    dp[0] = 1;
    if (nums[0] <= K) dp[nums[0]] += 1;

    for (let i = 1; i < nums.length; i++) {
        let curr = new Array(K + 1).fill(0);
        curr[0] = 1;

        for (let t = 0; t <= K; t++) {
            let notTake = dp[t];
            let take = 0;
            if (nums[i] <= t) {
                take = dp[t - nums[i]];
            }
            curr[t] = take + notTake;
        }
        dp = curr;

    }

    return dp[K];

};

const nums = [1, 1, 1, 1, 1], target = 3

console.log(findTargetSumWays(nums, target));