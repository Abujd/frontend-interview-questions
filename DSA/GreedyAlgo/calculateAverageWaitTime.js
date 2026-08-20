var calculateAverageWaitTime = function (jobs) {
    let n = jobs.length;
    jobs.sort((a, b) => a - b);
    let totalTime = 0;
    let waitTime = 0

    for (let i = 0; i < n; i++) {
        waitTime += totalTime;
        totalTime += jobs[i];
    }
    return waitTime / n;

}

let jobs = [3, 1, 4, 2, 5]


console.log(calculateAverageWaitTime(jobs));
