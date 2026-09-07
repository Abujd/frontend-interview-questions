var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    const dp = Array.from({
        length: m
    }, () => new Array(n).fill(-1));

    function solve(i, j) {
        if (i === 0 && j === 0) return 1;
        if (i < 0 || j < 0) return 0;
        if (obstacleGrid[i][j] === 1) return 0;
        if (dp[i][j] !== -1) return dp[i][j];
        let top = solve(i - 1, j);
        let left = solve(i, j - 1);
        dp[i][j] = top + left;
        return dp[i][j];
    }


    return solve(m - 1, n - 1);

};

const obstacleGrid = [
    [0, 1],
    [0, 0],
];



console.log(uniquePathsWithObstacles(obstacleGrid));