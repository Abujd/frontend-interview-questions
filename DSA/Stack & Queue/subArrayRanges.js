var subArrayRanges = function (arr) {
    let sum = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let min = arr[i], max = arr[i];
        for (let j = i; j < n; j++) {
            min = Math.min(min, arr[j]);
            max = Math.max(max, arr[j]);
            sum = (sum + (max - min));
        }
    }
    return sum;
};
let nums = [1, 2, 3];
console.log(subArrayRanges(nums));