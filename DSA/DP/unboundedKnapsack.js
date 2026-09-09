var unboundedKnapsack = function (weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n }, () => new Array(capacity + 1).fill(-1));

    return helper(weights, values, capacity, n - 1, dp)

};

var helper = function (weights, values, capacity, ind, dp) {

    if (ind === 0) {
        return Math.floor(capacity / weights[0]) * values[0];
    }

    if (dp[ind][capacity] !== -1) return dp[ind][capacity];

    let notTake = helper(weights, values, capacity, ind - 1, dp);
    let take = -Infinity;
    if (capacity >= weights[ind]) {
        take = values[ind] + helper(weights, values, capacity - weights[ind], ind, dp);
    }

    dp[ind][capacity] = Math.max(notTake, take);
    return dp[ind][capacity];

}
var unboundedKnapsackTab = function (weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n }, () => new Array(capacity + 1).fill(-1));

    // Base condition: fill first row using infinite supply of first item

    for (let i = weights[0]; i <= capacity; i++) {
        dp[0][i] = Math.floor(i / weights[0]) * values[0];;
    }

    for (let ind = 1; ind < n; ind++) {
        for (let c = 0; c <= capacity; c++) {
            //not Take

            let notTake = dp[ind - 1][c];

            //take
            let take = Number.NEGATIVE_INFINITY;

            if (weights[ind] <= c) {
                take = values[ind] + dp[ind][c - weights[ind]];
            }

            dp[ind][c] = Math.max(take, notTake);


        }

    }
    return dp[n - 1][capacity];

}

const weights = [2, 4, 6];
const values = [5, 11, 13];
const capacity = 10;
console.log(unboundedKnapsack(weights, values, capacity));
console.log(unboundedKnapsackTab(weights, values, capacity));