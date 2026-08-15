
var helper = function (sum, index, k, res, current) {
    if (sum === 0 && current.length === k) {
        res.push([...current]);
        return;
    }
    if (sum <= 0 && current.length > k) return;

    for (let i = index; i <= 9; i++) {
        if (i <= sum) {
            current.push(i);
            helper(sum - i, i + 1, k, res, current);
            current.pop();
        } else {
            break;
        }
    }

}

var combinationSum3 = function (k, n) {

    let res = [];
    helper(n, 1, k, res, [])
    return res;
};
let k = 3, n = 9;
console.log(combinationSum3(k, n));
