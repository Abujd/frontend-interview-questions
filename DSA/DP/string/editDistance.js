var minDistance = function (word1, word2) {
    const n = word1.length;
    const m = word2.length;
    const dp = Array.from({ length: n }, () => new Array(m).fill(-1));

    // return helper(word1, word2, n - 1, m - 1, dp);

    return helperTab(word1, word2);


};

var helperTab = function (word1, word2) {
    const n = word1.length;
    const m = word2.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    //base case

    // If i === 0, first string is exhausted.
    // We need to perform ops on all remaining characters of string2.
    // So j operations are needed.

    for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {

            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
            }

        }
    }
    return dp[n][m];
}
var helper = function (word1, word2, i, j, dp) {
    //base case

    if (j < 0) return i + 1;
    if (i < 0) return j + 1;

    if (dp[i][j] === -1) return dp[i][j];

    if (word1[i] === word2[j]) {
        dp[i][j] = helper(word1, word2, i - 1, j - 1, dp)
    } else {
        dp[i][j] = 1 + Math.min(helper(word1, word2, i - 1, j - 1, dp), Math.min(helper(word1, word2, i, j - 1, dp), helper(word1, word2, i - 1, j, dp)));
    }
    return dp[i][j];
};


const word1 = "horse";
const word2 = "ros";

console.log(minDistance(word1, word2));