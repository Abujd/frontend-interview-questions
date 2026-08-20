var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prevEnd) {
            // Overlap → remove this interval
            count++;
        } else {
            // No overlap → keep this interval
            prevEnd = intervals[i][1];
        }
    }

    return count;
};


let intervals = [[1, 100], [11, 22], [1, 11], [2, 12]];

console.log(eraseOverlapIntervals(intervals));
