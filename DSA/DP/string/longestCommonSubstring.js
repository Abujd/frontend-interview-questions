var longestCommonSubstring = function (str1, str2) {
    const n = str1.length, m = str2.length;
    let count = 0;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0))
    return helperTab(str1, str2, n, m, count, dp);
};
var helper = function (str1, str2, n, m, count, dp) {

    if (m < 0 || n < 0) return count;

    if (dp[n][m] !== 0) return dp[n][m];

    if (str1[n] === str2[m]) {
        count++;
        dp[n][m] = helper(str1, str2, n - 1, m - 1, count, dp);
    } else {
        dp[n][m] = Math.max(helper(str1, str2, n, m - 1, 0, dp), helper(str1, str2, n - 1, m, 0, dp));
    }
    return dp[n][m];
}

var helperTab = function (str1, str2, n, m, count, dp) {

    let maxLength = 0;


    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }

    for (let i = 0; i <= m; i++) {
        dp[0][i] = 0;
    }
    console.log(dp);

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                maxLength = Math.max(maxLength, dp[i][j]);

            } else {
                //Char doesn't match consider max from left or above
                dp[i][j] = 0;

            }
        }
    }

    if (dp[n][m] === 0) return 0;
    let ans = [];

    let i = n, j = m;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            ans.push(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[j][i - 1]) {
            i--;
        } else {
            j--;
        }
    }
    return ans.reverse().join("")
}
const str1 = "xyabcdeo";
const str2 = "abcdeo";

console.log(longestCommonSubstring(str1, str2));