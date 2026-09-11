var lengthOfLIS = function (nums) {

    const n = nums.length;
    const temp = [];
    temp.push(nums[0]);

    for (let i = 1; i < n; i++) {
        if (nums[i] > temp[temp.length - 1]) {
            temp.push(nums[i]);
        } else {
            //find the index where current element can be placed
            //What is lower bound - first Smallest element from target

            let ind = lower_bound(temp, nums[i]);
            temp[ind] = nums[i];
        }
    }

    return temp;
};
var lower_bound = function (nums, target) {

    let start = 0; end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }
    return start;

}
const nums = [10, 9, 2, 5, 3, 7, 101, 18];

console.log(lengthOfLIS(nums));