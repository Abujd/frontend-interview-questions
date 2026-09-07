var canPartitionKSubsets = function (nums, k) {
    let n = nums.length;
    let totalSum = nums.reduce((a, b) => a + b, 0);

    const target = Math.floor(totalSum / k);
    if (totalSum % k !== 0) return false;
    let taken = new Array(nums.length).fill(false);

    const canPartition = helper(nums, 0, k, target, 0, taken);
    return canPartition;
};
var helper = function (nums, k, sum, target, index, taken) {
    if (target === sum) {
        k--;
        if (k === 0) return true;
        sum = 0;
        index = 0;
    }
    if (index >= nums.length) {
        return k === 0;
    }
    // Try every unused element 
    for (let i = index; i < nums.length; i++) {
        if (taken[i]) continue;

        //don't exceed target

        if (sum + nums[i] > target) continue;
        const take = helper(nums, k, sum + nums[i], target, i + 1, taken);
        taken[i] = false;

        if (take) return true;

    }
    return false;

}


const nums = [1, 2, 3, 4];
const k = 3;

console.log(canPartitionKSubsets(nums, k));