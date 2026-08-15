var longestOnesBF = function (nums, k) {
    let stringMap = {};
    let ans = 0, count = 0, flip = 0;

    for (let i = 0; i < nums.length; i++) {
        flip = 0

        for (let j = i; j < nums.length; j++) {
            if (nums[j] === 1) {
                count++;
            } else if (flip < k) {
                flip++;
                count++;
            }
            else {

                break;
            }
        }
        ans = Math.max(ans, count);
        count = 0;

    }
    return ans;

};

var longestOnes = function (nums, k) {
    let r = 0, zero = 0, l = 0, maxL = 0;

    while (r < nums.length) {
        if (nums[r] === 0) zero++;
        if (zero > k) {
            if (nums[l] === 0) {

                zero--;
            }
            l++;
        } else {
            maxL = Math.max(maxL, r - l + 1);
        }
        r++;

    }
    return maxL;
}

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
    , k = 2;

console.log(longestOnes(nums, k));

