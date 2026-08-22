var resultArray = function (nums) {
    let n = nums.length;
    let p1 = 0, p2 = 0;
    let arr1 = [nums[0]], arr2 = [nums[1]];

    for (let i = 2; i < n; i++) {
        if (arr1[p1] > arr2[p2]) {
            arr1.push(nums[i]);
            p1++;
        } else {
            arr2.push(nums[i]);
            p2++;
        }
    }
    return [...arr1, ...arr2];
};
let nums = [5, 4, 3, 8];

console.log(resultArray(nums));
