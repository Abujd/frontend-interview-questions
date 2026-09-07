var uniquePaths = function (m, n) {

    const dp = Array.from({
        length: m
    }, () => new Array(n).fill(-1));

    function solve(i, j) {
        if (i === 0 && j === 0) return 1;
        if (i < 0 || j < 0) return 0;
        if (dp[i][j] !== -1) return dp[i][j];
        let top = solve(i - 1, j);
        let left = solve(i, j - 1);
        dp[i][j] = top + left;
        return dp[i][j];
    }

    return solve(m - 1, n - 1)

};

const m = 3;
const n = 7;

console.log(uniquePaths(m, n));