
var frogJumpWithK = function (height, k) {

    if (!height || height.length === 0) return 0;

    const n = height.length;
    const dp = Array(n).fill(-1);

    function solve(n) {
        if (n === 0) return 0;

        let min = Infinity;

        if (dp[n] !== -1) return dp[n];

        for (let j = 1; j <= k; j++) {
            if (n - j >= 0) {
                let m = solve(n - j) + Math.abs(height[n] - height[n - j])
                min = Math.min(min, m);
            }
        }
        dp[n] = min;
        return dp[n];
    }
    return solve(n - 1);


};

const heights = [15, 4, 1, 14, 15], k = 3;

console.log(frogJumpWithK(heights, k));