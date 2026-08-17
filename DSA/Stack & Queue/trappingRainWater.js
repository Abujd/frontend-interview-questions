/**
 * @param {number[]} height
 * @return {number}
 */
var trapBT = function (height) {
    let len = height.length;
    if (len === 0) return 0;
    let sufixArr = [];
    let prefixArr = [];

    prefixArr[0] = height[0];
    sufixArr[len - 1] = height[len - 1];

    let sum = 0;

    for (let i = 1; i < len; i++) {
        prefixArr[i] = Math.max(height[i], prefixArr[i - 1])
    }
    for (let i = len - 2; i >= 0; i--) {
        sufixArr[i] = Math.max(height[i], sufixArr[i + 1])
    }
    for (let i = 0; i < len; i++) {
        let leftMost = prefixArr[i];
        let rightMost = sufixArr[i];
        sum += Math.min(leftMost, rightMost) - height[i];

    }
    return sum;
};


var trap = function (height) {
    let totalWater = 0, n = height.length;
    let maxLeft = 0, left = 0;
    let maxRigth = 0, right = n - 1;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                totalWater += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRigth) {
                maxRigth = height[right];
            } else {
                totalWater += maxRigth - height[right];
            }
            right--;

        }
    }

    return totalWater;

}

let height = [4, 2, 0, 3, 2, 5];

console.log(trap(height));
// 6