var c = 0;

function countSubsequenceWithTargetSum(index, arr, current, target, sum) {
    if (index === arr.length) {
        if (sum === target) c++;
        return;
    }

    // Take
    current.push(arr[index]);
    countSubsequenceWithTargetSum(
        index + 1,
        arr,
        current,
        target,
        sum + arr[index]
    );

    // Not take
    current.pop();
    countSubsequenceWithTargetSum(
        index + 1,
        arr,
        current,
        target,
        sum
    );
}

let nums = [4, 3, 9, 2], k = 10;

countSubsequenceWithTargetSum(0, nums, [], k, 0);
console.log(c !== 0 ? "Yes" : "No");