var numDistinct = function (s, t) {

    const n = s.length;
    const m = t.length;

    const dp = Array.from({ length: n }, () => new Array(m).fill(-1));

    // return helper(s, t, n - 1, m - 1, dp)

    return helperTab(s, t, n, m)

};

var helper = function (s, t, i, j, dp) {

    if (j < 0) return 1;
    if (i < 0) return 0;
    if (dp[i][j] !== -1) return dp[i][j];
    if (s[i] === t[j]) {
        dp[i][j] = helper(s, t, i - 1, j - 1, dp) + helper(s, t, i - 1, j, dp)
    } else {
        dp[i][j] = helper(s, t, i - 1, j, dp)
    }
    return dp[i][j];
}

var helperTab = function (s, t, n, m) {
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    //base case

    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }


    //find moving values
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];;
            }
        }
    }

    return dp[n][m];
}

const s = "babgbag", t = "bag"

console.log(numDistinct(s, t));