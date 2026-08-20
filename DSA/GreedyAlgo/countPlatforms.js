var countPlatforms = function (n, arr, dep) {

    const convertTime = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    arr = arr.map(convertTime);
    dep = dep.map(convertTime);

    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    let count = 0;
    let maxCount = 0;
    let i = 0;
    let j = 0;

    while (i < n) {

        if (arr[i] < dep[j]) {
            count++;
            i++;
        } else {
            count--;
            j++;
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};

let N = 6;

let arr = ["9:00", "9:45", "9:55", "11:00", "15:00", "18:00"];

let dep = ["9:20", "12:00", "11:30", "11:50", "19:00", "20:00"];

console.log(countPlatforms(N, arr, dep));