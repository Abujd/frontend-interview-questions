/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    return helper(nums, k) - helper(nums, k - 1);

};

var helper = function (nums, k) {
    let left = 0, right = 0, odd = 0, count = 0;

    while (right < nums.length) {
        if (nums[right] % 2 === 1) odd++;

        while (odd > k) {
            if (nums[left] % 2 === 1) {
                odd--;
            }
            left++;
        }

        count += (right - left + 1);
        right++;

    }

    return count;
}
let nums = [2, 4, 6], k = 1;
console.log(numberOfSubarrays(nums, k)); 
