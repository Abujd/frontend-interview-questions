function helper(index, candidates, target, current, res) {
    if (index === candidates.length) {
        if (target === 0) {
            res.push([...current]);
            console.log([...current]);
        }
        return;
    }


    if (candidates[index] <= target) {
        current.push(candidates[index]);
        helper(index, candidates, target - candidates[index], current, res);
        current.pop();

    }


    helper(index + 1, candidates, target, current, res);

}

var combinationSum = function (candidates, target) {
    let res = [];
    helper(0, candidates, target, [], res);
    return res;
};

var candidates = [2, 3, 6, 7], target = 7;
let res = combinationSum(candidates, target);
console.log(res);