var countSubsets = function (arr, target) {

    arr.sort((a, b) => a - b);

    const dp = Array.from(
        { length: arr.length },
        () => new Array(target + 1).fill(-1)
    );

    return helper(arr, target, 0, dp);
};


var helper = function (arr, target, index, dp) {

    if (index === arr.length) {
        return target === 0 ? 1 : 0;
    }

    if (dp[index][target] !== -1) {
        return dp[index][target];
    }

    // Take
    let take = 0;

    if (arr[index] <= target) {
        take = helper(
            arr,
            target - arr[index],
            index + 1,
            dp
        );
    }

    // Not Take
    let notTake = helper(
        arr,
        target,
        index + 1,
        dp
    );

    dp[index][target] = take + notTake;

    return dp[index][target];
};


const arr = [1, 2, 3, 3];
const target = 6;

console.log(countSubsets(arr, target));