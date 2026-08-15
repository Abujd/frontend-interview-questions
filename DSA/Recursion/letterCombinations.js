var map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
var helper = function (digits, res, current, index) {

    if (digits.length === index) {
        res.push(current);
        return;
    }
    let s = map[digits[index] - '0'];
    for (let i = 0; i < s.length; i++) {

        helper(digits, res, current + s[i], index + 1);

    }

}

var letterCombinations = function (digits) {

    let res = [];
    if (digits.length === 0) return res;

    helper(digits, res, "", 0)
    return res;
};
let digits = '23';
console.log(letterCombinations(digits));