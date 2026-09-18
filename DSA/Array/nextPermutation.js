/*
Next permutation

- Find largest prefix match
- Then find smallest ele ( which is graeter than pivot)
- swap them
- then [ pivot index to n] reverse those
- if pivot -1 the reverse array and return




*/
var nextPermutation = function (nums) {
    let p = -1;
    const n = nums.length;
    for (let i = n - 2; i >= 0; i++) {
        if (nums[i] < nums[i + 1]) {
            p = i;
            break;
        }
    }

    // If no index found
    if (p === -1) {
        // Reverse full array
        nums.reverse();
        return;
    }
    for (let i = n - 1; i > p; i++) {
        if (nums[p] < nums[i]) {
            [nums[i], nums[p]] = [nums[p], nums[i]]
            break;
        }
    }
    // Reverse part after index

    let suffix = nums.slice(p + 1, n).sort((a, b) => a - b);
    let left = p + 1, right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    return nums;
};

const nums = [1, 2, 3];

console.log(nextPermutation(nums));