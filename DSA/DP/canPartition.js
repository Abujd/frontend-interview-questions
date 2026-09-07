var canPartition = function (nums) {
    const n = nums.length;
    let totalSum = nums.reduce((a, b) => a + b, 0);
    if (totalSum % 2 === 1) return false;
    const k = Math.floor(totalSum / 2);

    let dp = Array.from(
        { length: nums.length },
        () => new Array(k + 1).fill(-1)
    );

    canDevide = helper(nums, k, 0, dp);

    return canDevide;

};

var helper = function (arr, target, index, dp) {
    if (target === 0) {
        return true;
    }

    if (index === arr.length || target < 0) {
        return false;
    }

    if (dp[index][target] !== -1) {
        return dp[index][target];
    }

    let take = helper(arr, target - arr[index], index + 1, dp);
    let notTake = helper(arr, target, index + 1, dp);

    dp[index][target] = take || notTake;

    return dp[index][target];
};

const nums = [1, 5, 11, 5];

console.log(canPartition(nums));