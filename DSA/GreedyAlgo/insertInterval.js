let insert = function (intervals, newInterval) {
    let res = [];
    let i = 0;
    let n = intervals.length;
    //take left
    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;

    }
    //overlapping interval

    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    res.push(newInterval);
    while (i < n) {
        res.push(intervals[i]);
        i++;
    }
    return res;

}
let intervals = [[1, 3], [6, 9]], newInterval = [2, 5];

console.log(insert(intervals, newInterval));
