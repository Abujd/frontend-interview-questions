/*
    Shortest Common Supersequence (SCS)

    Key idea:
    1. Find the Longest Common Subsequence (LCS) of s1 and s2.
    2. Keep the common characters (LCS) only once.
    3. Add the remaining characters from s1 and s2 around the LCS.
    4. This gives the shortest string that contains both s1 and s2
       as subsequences.

    Example:

    s1 = "abac"
    s2 = "cab"

    LCS = "ab"

    Keep "ab" only once and add the remaining characters
    from both strings.

    One possible SCS:
    "cabac"

    It contains:
    s1 = "abac"  → subsequence
    s2 = "cab"   → subsequence

    Length formula:

    SCS length = s1.length + s2.length - LCS.length

    Example:
    4 + 3 - 2 = 5

    So, the shortest common supersequence has length 5.
*/
var shortestCommonSupersequence = function (str1, str2) {

    let n = str1.length;
    let m = str2.length;

    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(-1));


    //Base case
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }

    for (let j = 0; j <= m; j++) {
        dp[0][j] = 0;
    }

    //find out moving indexes

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }

    let i = n, j = m;
    let ans = [];

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            ans.push(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            ans.push(str1[i - 1]);

            i--;
        } else {
            ans.push(str2[j - 1]);
            j--;
        }
    }
    console.log(ans);

    while (i > 0) {
        ans.push(str1[i - 1]);
        i--;
    }

    while (j > 0) {
        ans.push(str2[j - 1]);
        j--;
    }
    return ans.reverse().join("");
};

const str1 = "abac";
const str2 = "cab";

console.log(shortestCommonSupersequence(str1, str2));