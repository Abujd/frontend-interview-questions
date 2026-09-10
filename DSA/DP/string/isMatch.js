var isMatch = function (s, p) {
    const n = s.length;
    const m = p.length;

    const dp = Array.from(
        { length: n },
        () => new Array(m).fill(-1)
    );

    return helper(s, p, n - 1, m - 1, dp);
};

var helper = function (s, p, j, i, dp) {

    // Both string and pattern exhausted
    if (i < 0 && j < 0) return true;

    // Pattern exhausted but string still remains
    if (i < 0 && j >= 0) return false;

    // String exhausted, pattern remains
    if (j < 0 && i >= 0) {
        for (let t = 0; t <= i; t++) {
            if (p[t] !== "*") return false;
        }

        return true;
    }

    // Already calculated
    if (dp[j][i] !== -1) {
        return dp[j][i];
    }

    // Character matches OR '?'
    if (p[i] === s[j] || p[i] === "?") {
        return dp[j][i] = helper(s, p, j - 1, i - 1, dp);
    }

    // '*'
    if (p[i] === "*") {

        // 1. '*' matches current character
        // 2. '*' matches empty
        return dp[j][i] =
            helper(s, p, j - 1, i, dp) ||
            helper(s, p, j, i - 1, dp);
    }

    // No match
    return dp[j][i] = false;
};