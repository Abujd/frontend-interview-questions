var maxProfit = function (prices) {
    const n = prices.length;
    if (n === 0) return 0;

    const dp = Array.from({ length: n }, () => [-1, -1]);
    //  return getMaxProfit(prices, n, 0, 1, dp);
    return getMaxProfitTab(prices, n, 0, 1, dp)
}

var getMaxProfit = function (prices, n, ind, buy, dp) {
    if (ind === n) return 0;

    if (dp[ind][buy] !== -1) return dp[ind][buy];

    if (buy) {
        //sell have 2 options
        // do nothing, or buy the stck and get max profit 
        dp[ind][buy] = Math.max(getMaxProfit(prices, n, ind + 1, 1, dp), -prices[ind] + getMaxProfit(prices, n, ind + 1, 0, dp))
    } else {

        //sell have 2 options
        // do nothing, or sell the stck and get max profit 
        dp[ind][buy] = Math.max(getMaxProfit(prices, n, ind + 1, 0, dp), prices[ind] + getMaxProfit(prices, n, ind + 1, 1, dp))

    }

    return dp[ind][buy];
}

var getMaxProfitTab = function (prices, n, ind, buy) {

    const dp = Array.from({ length: n + 1 }, () => [0, 0]);

    //Base case no need to write as we already init out dp with 0

    // dp[n - 1][0] = 0;
    // dp[n - 1][1] = 0;

    //changing indexes

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



const prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));
