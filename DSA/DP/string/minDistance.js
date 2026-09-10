
var minDistance = function (s, s2) {
    const n = s.length;
    const m = s2.length;

    const dp = Array.from({
        length: n + 1
    }, () => new Array(m + 1).fill(-1));

    //Base case

    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }
    for (let j = 0; j <= m; j++) {
        dp[0][j] = 0;
    }
    //changing Params

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }

    const longestPalindrome = dp[n][m];
    return n - longestPalindrome + m - longestPalindrome;
};