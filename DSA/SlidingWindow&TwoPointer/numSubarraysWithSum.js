var numSubarraysWithSumBT = function (nums, goal) {
    let count = 0, ans = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === goal) {
                ans++;
            }

        }
    }
    return ans;

};

var numSubarraysWithSum = function (nums, goal) {
    return helper(nums, goal) - helper(nums, goal - 1)
}

var helper = function (nums, goal) {
    let sum = 0, left = 0, right = 0, c = 0;

    while (right < nums.length) {
        sum += nums[right];


        while (sum > k) {
            sum -= nums[left];
            left++;
        }
        c += (right - left + 1)
        right++;
    }
    return c;
}

var nums = [1, 0, 1, 0, 1], goal = 2;
console.log(numSubarraysWithSum(nums, goal));
