/*
    Key idea:
    Keep the longest palindromic subsequence intact,
    and add the remaining characters to make the string a palindrome.

    Example:
    s = "mbadm"

    Longest Palindromic Subsequence = "mam"

    Remaining characters:
    "b" and "d"

    Add their reverse on the opposite side:

    m + b + d + a + d + b + m
    = "mbdadbm"

    Therefore, the number of insertions/operations needed is:

    length of string - length of Longest Palindromic Subsequence

    Answer:
    5 - 3 = 2 operations

    Formula:
    Minimum Insertions = n - LPS
*/
var minInsertions = function (s) {


    const s2 = s.split("").reverse().join("");
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

    return n - longestPalindrome;

};

const s = "mbadm";

console.log(minInsertions(s));