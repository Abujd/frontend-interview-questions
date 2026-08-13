
function countSubsequenceWithTargetSum(index, arr, current, target, sum) {
    if (index === arr.length) {
        if (sum === target) {
            return 1;
        } else {
            return 0;
        }
    }

    // Take
    current.push(arr[index]);
    let l = countSubsequenceWithTargetSum(
        index + 1,
        arr,
        current,
        target,
        sum + arr[index]
    );

    // Not take
    current.pop();
    let r = countSubsequenceWithTargetSum(
        index + 1,
        arr,
        current,
        target,
        sum
    );
    return l + r;
}
let nums = [9, 1, 9, 1], k = 10;

let c = countSubsequenceWithTargetSum(0, nums, [], k, 0);
console.log(c);



//check if there is a subsequence with sum k or not but you can't declare any global variable. You can only return true or false from the function.

function countSubsequenceWithTargetSumIsPresent(index, arr, current, target, sum) {
    if (index === arr.length) {
        return sum === target;
    }

    // Take
    current.push(arr[index]);
    if (countSubsequenceWithTargetSumIsPresent(
        index + 1,
        arr,
        current,
        target,
        sum + arr[index]
    ) === true) {
        return true;
    }

    // Not take
    current.pop();
    if (countSubsequenceWithTargetSumIsPresent(
        index + 1,
        arr,
        current,
        target,
        sum
    ) === true) {
        return true;
    }

    return false;
}

// let nums = [4, 3, 9, 2], k = 10;

// let s = countSubsequenceWithTargetSumIsPresent(0, nums, [], k, 0);
// console.log(s);
