//Subset Sum : Sum of all Subsets

function helper(index, nums, res, sum) {
    if (index === nums.length) {
        res.push(sum);
        return;

    }
    helper(index + 1, nums, res, sum + nums[index]);
    helper(index + 1, nums, res, sum);



}
let res = [];
let nums = [3, 1, 2];
helper(0, nums, res, 0);
res.sort((a, b) => a - b);

console.log(res);

