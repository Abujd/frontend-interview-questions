var jobScheduling = function (jobs) {
    let n = jobs.length;
    jobs.sort((a, b) => b[2] - a[2]);
    let deadline = 0;
    for (let i = 0; i < n; i++) {
        deadline = Math.max(deadline, jobs[i][1]);
    }
    let slot = new Array(deadline).fill(-1);
    let countJobs = 0, jobProfit = 0;

    for (let i = 0; i < n; i++) {
        for (let j = jobs[i][1]; j > 0; j--) {
            if (slot[j] === -1) {
                slot[j] = i;
                countJobs++;
                // Add the profit of the job
                jobProfit += jobs[i][2];
                break;
            }
        }
    }
    return [countJobs, jobProfit];
}


var jobs = [
    [1, 4, 20],
    [2, 1, 10],
    [3, 1, 40],
    [4, 1, 30]
];
console.log(jobScheduling(jobs));
