var maxProfit = function (prices) {
    const n = prices.length;
    if (n === 0) return 0;

    // Creating a 3D array to store dynamic programming values
    const dp = new Array(n).fill(null).map(() =>
        new Array(2).fill(null).map(() =>
            new Array(3).fill(-1)
        )
    );
    return getMaxProfit(prices, n, 0, 1, dp, 2);
};
var getMaxProfit = function (prices, n, ind, buy, dp, cap) {
    if (ind === n || cap === 0) return 0;

    if (dp[ind][buy][cap] !== -1) return dp[ind][buy][cap];

    if (buy) {
        //sell have 2 options
        // do nothing, or buy the stck and get max profit 
        dp[ind][buy][cap] = Math.max(getMaxProfit(prices, n, ind + 1, 1, dp, cap), -prices[ind] + getMaxProfit(prices, n, ind + 1, 0, dp, cap))
    } else {

        //sell have 2 options
        // do nothing, or sell the stck and get max profit 
        dp[ind][buy][cap] = Math.max(getMaxProfit(prices, n, ind + 1, 0, dp, cap), prices[ind] + getMaxProfit(prices, n, ind + 1, 1, dp, cap - 1))

    }

    return dp[ind][buy][cap];
}

var getMaxProfitTab = function (prices, n, ind, buy) {

    // const dp = Array.from({ length: n + 1 }, () => [0, 0]);

    const dp = new Array(n + 1).fill(null).map(() => new Array(2).fill(null).map(() => new Array(-3).fill(0)));

    //Base case no need to write as we already init out dp with 0

    // dp[n - 1][0] = 0;
    // dp[n - 1][1] = 0;

    //changing indexes
    let cap = 2;
    for (let ind = n - 1; ind >= 0; ind--) {
        for (let j = 0; j < 2; j++) {

            if (j === 0) {
                // Option 1: skip buying
                // Option 2: buy → -arr[ind] + dp[ind+1][1]
                dp[ind][j] = Math.max(dp[ind + 1][0], -prices[ind] + dp[ind + 1][1]);
            } else {
                dp[ind][j] = Math.max(dp[ind + 1][1], prices[ind] + dp[ind + 1][0]);
            }

        }
    }
    return dp[0][0];

}

const prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));
