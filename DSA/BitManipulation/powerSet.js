/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
ex- 
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/


var subsets = function (nums) {

    let totalSubset = 1 << nums.length;
    let res = [];

    for (let i = 0; i < subsets; i++) {
        let s = [];
        for (let j = 0; j < nums.length; j++) {
            if (i & (1 << i)) {
                s.push(nums[i]);
            }
        }
        res.push([...s]);
    }
    return res;
};
let nums = [1, 2, 3];
console.log(subsets(nums));
