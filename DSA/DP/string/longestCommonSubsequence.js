var longestCommonSubsequence = function (s1, s2) {
    const dp = Array.from({
        length: s1.length
    }, () => new Array(s2.length).fill(-1));
    return lcs(s1, s2, s1.length - 1, s2.length - 1, dp);
};
var lcs = function (s1, s2, ind1, ind2, dp) {
    if (ind1 < 0 || ind2 < 0) return 0;
    if (dp[ind1][ind2] !== -1) return dp[ind1][ind2];
    if (s1[ind1] === s2[ind2]) {
        dp[ind1][ind2] = 1 + lcs(s1, s2, ind1 - 1, ind2 - 1, dp);
    } else {
        dp[ind1][ind2] = Math.max(lcs(s1, s2, ind1 - 1, ind2, dp), lcs(s1, s2, ind1, ind2 - 1, dp))
    }
    return dp[ind1][ind2];
};


var longestCommonSubsequencetab = function (s1, s2) {
    let n = s1.length, m = s2.length;

    const dp = Array.from({
        length: n + 1
    }, () => new Array(m + 1).fill(-1));

    //Initalize the Base Cases
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }
    for (let i = 0; i <= m; i++) {
        dp[0][i] = 0;
    }
    // Fill in the DP table to calculate length of LCS


    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // Characters match, increment LCS length

            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                //Char doesn't match consider max from left or above

                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    if (dp[n][m] === 0) return 0;
    let ans = [];
    let i = n, j = m;
    while (i > 0 && j > 0) {

        if (s1[i - 1] === s2[j - 1]) {
            ans.push(s1[i - 1]);
            i--;
            j--;

        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }

    }


    return ans.reverse().join('');

}


const text1 = "abcd", text2 = "bdef"

console.log(longestCommonSubsequence(text1, text2));  //2
console.log(longestCommonSubsequencetab(text1, text2));  //bd