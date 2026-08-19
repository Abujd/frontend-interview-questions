var jump = function (nums) {
    // Initialize counters and range pointers
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    // Loop through the array except the last index
    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest we can reach from this index
        farthest = Math.max(farthest, i + nums[i]);

        // If we reach the end of current jump range
        if (i === currentEnd) {
            // Increase jump count
            jumps++;

            // Move the end to the farthest position we can jump to
            currentEnd = farthest;
        }
    }

    // Return total jumps needed
    return jumps;

};
let nums = [2, 3, 1, 1, 4];
console.log(jump(nums));
