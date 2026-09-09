var coinChange = function (coins, amount) {

    const dp = Array.from({
        length: coins.length
    }, () => new Array(amount + 1).fill(-1));

    const res = helper(coins, amount, coins.length - 1, dp);
    return res === Infinity ? -1 : res;
};

var helper = function (coins, target, ind, dp) {
    if (ind === 0) {
        if (target % coins[0] === 0) return target / coins[0];
        else return Infinity;
    }
    if (dp[ind][target] !== -1) return dp[ind][target];
    //Not take

    let notTake = helper(coins, target, ind - 1, dp);
    let take = Infinity;
    if (coins[ind] <= target) {
        take = 1 + helper(coins, target - coins[ind], ind, dp);
    }
    dp[ind][target] = Math.min(notTake, take);
    return dp[ind][target];
}

const coins = [1, 2, 5], amount = 11

console.log(coinChange(coins, amount));
