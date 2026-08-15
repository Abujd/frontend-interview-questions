
var helper = function (index, nums, res, current) {
    res.push([...current]);

    for (let i = index; i < nums.length; i++) {
        if (i > index && nums[i] === nums[i - 1]) continue;
        current.push(nums[i]);
        helper(i + 1, nums, res, current);
        current.pop();

    }
}

var subsetsWithDup = function (nums) {
    let res = [];
    helper(0, nums, res, []);
    return res;

};

var nums = [1, 2, 2];
console.log(subsetsWithDup(nums));