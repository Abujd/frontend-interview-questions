var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    const dp = Array.from({
        length: m
    }, () => new Array(n).fill(-1));

    function solve(i, j) {
        if (i === 0 && j === 0) return grid[i][j];
        if (i < 0 || j < 0) return Infinity;

        if (dp[i][j] !== -1) return dp[i][j];

        let top = solve(i - 1, j);
        let left = solve(i, j - 1);

        dp[i][j] = grid[i][j] + Math.min(top, left);
        return dp[i][j];

    }

    return solve(m - 1, n - 1);

};

const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];

console.log(minPathSum(grid));