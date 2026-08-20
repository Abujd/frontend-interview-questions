var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = [];
    let n = intervals.length, newInterval = [];
    let i = 0;

    while (i < n) {
        let start = intervals[i][0];
        let end = intervals[i][1];

        i++;

        while (i < n && end >= intervals[i][0]) {
            end = Math.max(end, intervals[i][1]);
            i++;
        }

        ans.push([start, end]);
    }
    return ans;

};

let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals));
