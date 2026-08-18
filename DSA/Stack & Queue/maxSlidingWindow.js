var maxSlidingWindow = function (nums, k) {
    let dq = [], res = [];
    for (let i = 0; i < nums.length; i++) {
        if (dq.length && dq[0] <= i - k) {
            dq.shift();
        }

        while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {
            dq.pop();
        }
        dq.push(i);
        if (i >= k - 1) {
            res.push(nums[dq[0]]);
        }
    }
    return res;

};
let nums = [4, 0, -1, 3, 5, 3, 6, 8], k = 3;
console.log(maxSlidingWindow(nums, k));
