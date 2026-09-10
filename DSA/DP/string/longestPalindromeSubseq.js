var longestPalindromeSubseq = function (s) {

    const s2 = s.split("").reverse().join("");
    const n = s.length;
    const m = s2.length;

    const dp = Array.from({
        length: n
    }, () => new Array(m).fill(-1));

    // return helperTab(s, s2, n- 1, m - 1, dp);

    return helperTab(s, s2);

};
var helper = function (str1, str2, n, m, dp) {

    if (n < 0 || m < 0) return 0;
    if (dp[n][m] !== -1) return dp[n][m];

    if (str1[n] === str2[m]) {
        dp[n][m] = 1 + helper(str1, str2, n - 1, m - 1, dp);
    } else {
        dp[n][m] = Math.max(helper(str1, str2, n, m - 1, dp), helper(str1, str2, n - 1, m, dp))
    }
    return dp[n][m];
}
var helperTab = function (str1, str2) {

    const n = str1.length;
    const m = str1.length;

    const dp = Array.from({
        length: n + 1
    }, () => new Array(m + 1).fill(-1));

    if (n < 0 || m < 0) return 0;

    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }

    for (let j = 0; j <= m; j++) {
        dp[0][j] = 0
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[n][m];
}
const s = "bbbab";


console.log(longestPalindromeSubseq(s));