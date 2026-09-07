var frogJump = function (height) {

    if (!height || height.length === 0) return 0;

    const n = height.length;
    const dp = Array(n).fill(-1);

    function solve(n) {

        //for first stone, cost is 0
        if (n === 0) return 0;

        if (dp[n] !== -1) return dp[n];

        let jumpOne = solve(n - 1) + Math.abs(height[n] - height[n - 1]);
        let jumpTwo = Number.POSITIVE_INFINITY;

        if (n > 1) {
            jumpTwo = solve(n - 2) + Math.abs(height[n] - height[n - 2]);
        }

        dp[n] = Math.min(jumpOne, jumpTwo);

        return dp[n];

    }

    return solve(n - 1);

};
