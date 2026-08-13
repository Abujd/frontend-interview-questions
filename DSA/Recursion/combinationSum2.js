function combinationSum2(candidates, target, index, current, res) {
    if (target === 0) {
        res.push([...current]);
        console.log([...current]);

        return;
    }

    for (let i = index; i < candidates.length; i++) {
        if (i > index && candidates[i] === candidates[i - 1]) continue;
        if (candidates[i] > target) break;

        current.push(candidates[i]);
        combinationSum2(candidates, target - candidates[i], i + 1, current, res);
        current.pop();
    }

}

var combinationSum3 = function (k, n) {
    let candidates = Array.from({ length: 5 }, (_, i) => i + 1);
    let res = [];
    combinationSum2(candidates, n, 0, [], res);

    // return sum;

};
let k = 3, n = 9;
combinationSum3(k, n);

// let candidates = [10, 1, 2, 7, 6, 1, 5], target = 8;
// candidates.sort((a, b) => a - b);
// let res = [];
// combinationSum2(candidates, target, 0, [], res);
// console.log(res);