function maxMeetings(start, end) {
    let meetingObj = [];
    for (let i = 0; i < end.length; i++) {
        meetingObj.push([start[i], end[i], i + 1])
    }
    meetingObj.sort((a, b) => a[1] - b[1]);
    let res = [];
    let lastEnd = -1;

    for (let m of meetingObj) {
        if (m[0] > lastEnd) {
            res.push(m[2]);
            lastEnd = m[1];
        }
    }
    return res;
}

// Main driver code
let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];

console.log(maxMeetings(start, end));