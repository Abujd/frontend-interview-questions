
function isValid(s) {
    let balance = 0;
    for (let c of s) {
        if (c === '(') balance++;
        else balance--;
        if (balance < 0) return false;
    }
    return balance === 0;
}


var generate = function(n,curr, s) {

    if(curr.length === 2 * n){
        if (isValid(curr)) s.push(curr);
        return;
    }

    generate(n, curr + "(", s);
    generate(n, curr + ")", s);
};

let n = 3;
let s = [];
generate(n, "", s);

console.log(s);

