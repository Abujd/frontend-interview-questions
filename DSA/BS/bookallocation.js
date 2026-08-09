function bookAllocationP(nums, m) {
    // Not enough books
    if (m > nums.length) return -1;

    let start = Math.max(...nums);
    let end = nums.reduce((a, b) => a + b, 0);
    let ans = end;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        let students = allocate(nums, mid);

        if (students <= m) {
            ans = mid;
            end = mid - 1;   // try smaller maximum
        } else {
            start = mid + 1; // need more pages
        }
    }

    return ans;
}

function allocate(nums, pages) {
    let students = 1;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (sum + nums[i] <= pages) {
            sum += nums[i];
        } else {
            students++;
            sum = nums[i];
        }
    }

    return students;
}

let nums = [12, 34, 67, 90], m=2 ;

console.log(bookAllocationP(nums, m));