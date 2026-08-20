var candy = function (ratings) {
    let n = ratings.length;
    let sum = n, i = 1;

    while (i < n) {
        if (ratings[i] === ratings[i - 1]) {
            i++;
            continue;
        }

        //Left Slop
        let peak = 0;
        while (i < n && ratings[i] > ratings[i - 1]) {
            peak++;
            sum += peak;
            i++;
        }
        let down = 0;
        while (i < n && ratings[i] < ratings[i - 1]) {
            down++;
            sum += down;
            i++;
        }
        sum -= Math.min(peak, down);

    }
    return sum;

    // let left = new Array(n).fill(0);
    // let right = new Array(n).fill(0);
    // let sum = 0;

    // left[0] = 1;
    // right[n - 1] = 1;

    // // Left → Right
    // for (let i = 1; i < n; i++) {
    //     if (ratings[i] > ratings[i - 1]) {
    //         left[i] = left[i - 1] + 1;
    //     } else {
    //         left[i] = 1;
    //     }
    // }

    // // Right → Left
    // for (let i = n - 2; i >= 0; i--) {
    //     if (ratings[i] > ratings[i + 1]) {
    //         right[i] = right[i + 1] + 1;
    //     } else {
    //         right[i] = 1;
    //     }
    // }


    // for (let i = 0; i < n; i++) {
    //     sum += Math.max(left[i], right[i]);
    // }

    // return sum;
};

let ratings = [1, 0, 5];

console.log(candy(ratings)); // 5