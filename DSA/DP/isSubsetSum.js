var isSubsetSum = function (arr, target) {
    let dp = Array.from(
        { length: arr.length },
        () => new Array(target + 1).fill(-1)
    );
    return helper(arr, target, 0, dp);
};

var helper = function (arr, target, index, dp) {

    if (target === 0) {
        return true;
    }

    if (index === arr.length || target < 0) {
        return false;
    }

    if (dp[index] !== -1) {
        return dp[index][target];
    }

    let take = helper(arr, target - arr[index], index + 1, dp);
    let notTake = helper(arr, target, index + 1, dp);

    dp[index][target] = take || notTake;

    return dp[index][target];
};

const arr = [6, 2, 1, 5];
const target = 4;

console.log(isSubsetSum(arr, target));