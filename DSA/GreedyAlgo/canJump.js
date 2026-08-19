var canJump = function (nums) {
    let maxJump = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxJump) return false;

        maxJump = Math.max(maxJump, i + nums[i]);
    }
    return true;
};


var helper = function (nums, idx) {
    if (idx >= nums.length - 1)
        return true;

    for (let i = 1; i <= nums[idx]; i++) {
        if (helper(nums, idx + i))
            return true;
    }
    return false;
}

var nums = nums = [1, 2, 4, 1, 1, 0, 2, 5];
console.log(canJump(nums));
