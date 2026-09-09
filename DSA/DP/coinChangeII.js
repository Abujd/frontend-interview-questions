var change = function (amount, coins) {

    const dp = Array.from({
        length: coins.length
    }, () => new Array(amount + 1).fill(-1));

    return helper(coins, amount, coins.length - 1, dp);
};

var helper = function (coins, target, ind, dp) {
    if (ind === 0) {
        if (target % coins[0] === 0) return 1; return 0;
    }
    if (dp[ind][target] !== -1) return dp[ind][target];
    //Not take

    let notTake = helper(coins, target, ind - 1, dp);
    let take = 0;
    if (coins[ind] <= target) {
        take = helper(coins, target - coins[ind], ind, dp);
    }
    dp[ind][target] = notTake + take;
    return dp[ind][target];
}

const amount = 5, coins = [1, 2, 5]

console.log(coinChange(coins, amount));