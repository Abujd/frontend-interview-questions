// var rob = function (nums) {

//     const n = nums.length;
//     const dp = Array(n).fill(-1);
//     function solve(n) {
//         if (n < 0) return 0;
//         if (n === 0) return nums[0];

//         if (dp[n] !== -1) return dp[n];

//         let pick = nums[n] + solve(n - 2);
//         let notPick = solve(n - 1);
//         dp[n] = Math.max(pick, notPick);
//         return dp[n];
//     }

//     return solve(n - 1);
// };


var solve = function (n, arr, dp) {
    if (n < 0) return 0;

    if (n === 0) return arr[0];
    if (dp[n] !== -1) return dp[n];
    let pick = arr[n] + solve(n - 2, arr, dp);
    let notPick = solve(n - 1, arr, dp);

    dp[n] = Math.max(pick, notPick);
    return dp[n];

}

var rob = function (nums) {
    const n = nums.length;


    //corner cases
    if (n <= 0) return 0;

    if (n === 1) return nums[0];

    //exclude one
    let arr1 = nums.slice(1);

    //Include one
    let arr2 = nums.slice(0, n - 1);
    const dp = Array(arr1.length).fill(-1);
    const dp2 = Array(arr2.length).fill(-1);
    return Math.max(solve(arr1.length - 1, arr1, dp), solve(arr2.length - 1, arr2, dp2))


}
const nums = [1, 2, 3];

console.log(rob(nums));