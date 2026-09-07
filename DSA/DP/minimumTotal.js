var minimumTotal = function (triangle) {
    let m = triangle.length;

    const dp = Array.from({ length: m }, () => new Array(m).fill(-1))


    function solve(i, j) {
        if (i === m - 1) return triangle[i][j];
        if (dp[i][j] !== -1) return dp[i][j];

        let dia = triangle[i][j] + solve(i + 1, j + 1);
        let bottom = triangle[i][j] + solve(i + 1, j);
        dp[i][j] = Math.min(dia, bottom);
        return dp[i][j];



    }

    return solve(0, 0);



};

const triangle = [[-10]]

console.log(minimumTotal(triangle));