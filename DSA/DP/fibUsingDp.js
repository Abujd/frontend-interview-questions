// Fibonacci using memoization
var fib = function (n, dp) {
    if (n <= 1) {
        return n;
    }
    if (dp[n] !== -1) return dp[n];
    dp[n] = fib(n - 1) + fib(n - 2);
    return dp[n];
}
// let n = 5;
// let dp = new Array(n + 1).fill(-1);
// console.log(fib(n, dp));


// Fibonacci using tabulation


// var fibT = function (n) {
//     if (n <= 1) return n;

//     let dp = new Array(n + 1).fill(0);
//     dp[0] = 0;
//     dp[1] = 1;

//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }
//     return dp[n];
// }

// let n = 5;
// console.log(fibT(n));

var fibT = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let prev2 = 0, prev = 1, curr;

    for (let i = 2; i <= n; i++) {
        curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
}

let n = 5;
console.log(fibT(n));