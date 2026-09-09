var rodCutting = function (price, n) {
    const dp = Array.from({ length: n }, () => new Array(n + 1).fill(-1));
    return helper(price, n, price.length - 1, dp)
};

var helper = function (price, n, ind, dp) {

    if (ind === 0) {
        return n * price[0];
    }

    if (dp[ind][n] !== -1) return dp[ind][n];

    let notTake = helper(price, n, ind - 1, dp);
    let take = Number.NEGATIVE_INFINITY;
    let rodLength = ind + 1;

    if (n >= rodLength) {
        take = price[ind] + helper(price, n - rodLength, ind, dp);
    }

    dp[ind][n] = Math.max(notTake, take);
    return dp[ind][n];
}
var rodCuttingTab = function (price, n) {
    // Base case
    // Two changing parameters - ind, length
    // Recurrence

    const dp = Array.from({ length: n }, () => new Array(n + 1).fill(-1));
    for (let i = 0; i <= n; i++) {
        dp[0][i] = i * price[0];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= n; j++) {
            //not take 

            let notTake = dp[i - 1][j];
            let take = Number.NEGATIVE_INFINITY;
            let rod = i + 1;

            if (rod <= j) {
                take = price[i] + dp[i][j - rod];
            }

            dp[i][j] = Math.max(notTake, take);
        }
    }
    return dp[n - 1][n];
}


const price = [1, 5, 8, 9], n = 4
console.log(rodCutting(price, n));
console.log(rodCuttingTab(price, n));