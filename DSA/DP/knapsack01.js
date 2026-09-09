// var knapsack01 = function (weights, values, capacity) {

//     const dp = Array.from({ length: weights.length }, () => new Array(capacity + 1).fill(-1));

//     return helper(weights, values, capacity, weights.length - 1, dp)
// };

// var helper = function (weights, values, capacity, ind, dp) {

//     if (ind === 0) {
//         return weights[0] <= capacity ? values[0] : 0;
//     }

//     if (dp[ind][capacity] !== -1) return dp[ind][capacity];

//     let notTake = 0 + helper(weights, values, capacity, ind - 1, dp);
//     let take = -Infinity;
//     if (capacity >= weights[ind]) {
//         take = values[ind] + helper(weights, values, capacity - weights[ind], ind - 1, dp);
//     }

//     dp[ind][capacity] = Math.max(notTake, take);
//     return dp[ind][capacity];

// }

var knapsack01 = function (weights, values, capacity) {

    const n = weights.length;

    const dp = Array.from(
        { length: n },
        () => new Array(capacity + 1).fill(0)
    );

    // Base case: only item 0
    for (let cap = weights[0]; cap <= capacity; cap++) {
        dp[0][cap] = values[0];
    }

    // Fill the table
    for (let ind = 1; ind < n; ind++) {

        for (let cap = 0; cap <= capacity; cap++) {
            let notTake = dp[ind - 1][cap];

            // Take
            let take = -Infinity;

            if (weights[ind] <= cap) {
                take = values[ind] + dp[ind - 1][cap - weights[ind]];
            }

            dp[ind][cap] = Math.max(notTake, take);
        }
    }

    return dp[n - 1][capacity];
};



const weights = [3, 2, 5];
const values = [30, 40, 60];
const capacity = 6;

console.log(knapsack01(weights, values, capacity));