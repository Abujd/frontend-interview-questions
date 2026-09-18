
var findPeakElement = function (nums) {
    let n = nums.length;

    if (n === 1) return 0;

    if (nums[0] > nums[1]) return 0;

    if (nums[n - 1] > nums[n - 2]) return n - 1;

    let start = 0, end = n - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid])
            return mid;

        if (nums[mid] < nums[mid + 1]) {
            start = mid + 1
        } else {
            end = mid - 1;

        }
    }
}



const nums = [1, 2]
console.log(findPeakElement(nums));
